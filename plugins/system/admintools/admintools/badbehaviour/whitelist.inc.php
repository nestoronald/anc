<?php if (!defined('BB2_CORE')) die('I said no cheating!');

// ### AdminTools Modification --- BEGIN
function bb2_whitelist($package, $settings)
// ### AdminTools Modification --- END
{
	# FIXME: Transitional, until port maintainters implement bb2_read_whitelist
	if (function_exists('bb2_read_whitelist')) {
		$whitelists = bb2_read_whitelist();
	} else {
		$whitelists = @parse_ini_file(dirname(BB2_CORE) . "/whitelist.ini");
	}
	
	// ### AdminTools Modification --- BEGIN
	if(!is_array($whitelists)) $whitelists = array();
	$wlip = $settings['whitelist'];
	if(array_key_exists('ip', $whitelists)) {
		if(!is_array($whitelists['ip'])) $whitelists['ip'] = array();
	} else {
		$whitelists['ip'] = array();
	}
	$whitelists['ip'] = array_merge($whitelists['ip'], $wlip);
	// ### AdminTools Modification --- END

	if (@!empty($whitelists['ip'])) {
		foreach ($whitelists['ip'] as $range) {
			if (match_cidr($package['ip'], $range)) return true;
		}
	}
	if (@!empty($whitelists['useragent'])) {
		foreach ($whitelists['useragent'] as $user_agent) {
			if (!strcmp($package['headers_mixed']['User-Agent'], $user_agent)) return true;
		}
	}
	if (@!empty($whitelists['url'])) {
		if (strpos($package['request_uri'], "?") === FALSE) {
			$request_uri = $package['request_uri'];
		} else {
			$request_uri = substr($package['request_uri'], 0, strpos($package['request_uri'], "?"));
		}
		foreach ($whitelists['url'] as $url) {
			$pos = strpos($request_uri, $url);
			if ($pos !== false && $pos == 0) return true;
		}
	}
	return false;
}
