<?php
/**
* @title		sequence js module
* @version		0.4 beta
* @website		http://www.arrowthemes.com
* @copyright	Copyright (C) 2012 arrowthemes.com. All rights reserved.
*/


	// no direct access
	defined('_JEXEC') or die('Restricted access');

	//set active menu link
	$urlBase = JURI::base();
	$doc =& JFactory::getDocument();

	// add stylesheets/script
	$doc->addStyleSheet(JURI::base() . 'modules/mod_'.$module->name.'/styles/default.css');
	$doc->addScript(JURI::base() . 'modules/mod_'.$module->name.'/scripts/sequencejs.js');

	require(JModuleHelper::getLayoutPath('mod_'.$module->name));
?>
