<?php
/**
* @package   abana_j25
* @author    arrowthemes http://themeforest.net/user/arrowthemes/portfolio/?ref=arrowthemes
* @copyright Copyright (C) arrowthemes 
*/

// generate css for layout
$css[] = sprintf('body { min-width: %dpx; }', $this['config']->get('template_width'));
$css[] .= sprintf('.wrapper { width: %dpx; }', $this['config']->get('template_width'));
$css[] .= sprintf('a { color: #%s; }', $this['config']->get('link_color'));
$css[] .= sprintf('.breadcrumbs a { color: #%s; }', $this['config']->get('brd_link_color'));
$css[] .= sprintf('a:hover { color: #%s; }', $this['config']->get('hover_color'));
$css[] .= sprintf('body { color: #%s; }', $this['config']->get('body_color'));
$css[] .= sprintf('::selection, ::-moz-selection, ::-webkit-selection { background: #%s;}', $this['config']->get('text_highlight_color'));

// menu styles
$css[] .= sprintf('#header { background-color: #%s; }', $this['config']->get('menu_header_color'));
$css[] .= sprintf('.menu-dropdown li.level2 { background-color: #%s; }', $this['config']->get('menu_item_bg_color'));
$css[] .= sprintf('.menu-dropdown a.level1, .menu-dropdown span.level1, .menu-dropdown a.level2, .menu-dropdown span.level2, .menu-dropdown a.level3, .menu-dropdown span.level3, .tag-line, #call-us h1, .menu-dropdown a.level4, .menu-dropdown span.level4 { color: #%s; }', $this['config']->get('menu_item_font_color'));
$css[] .= sprintf('.menu-dropdown li.active .level1 { color: #%s; }', $this['config']->get('menu_item_active_color'));
$css[] .= sprintf('.level1 span.subtitle { color: #%s; }', $this['config']->get('menu_dfn_font_color'));
 
$css[] .= sprintf('.menu-sidebar a:hover, .menu-sidebar li > span:hover, .menu-sidebar a:hover > span, .menu-sidebar span:hover > span  { color: #%s; }', $this['config']->get('menu_item_bg_hover_color'));
$css[] .= sprintf('.menu-dropdown li.level2 { border-top: 1px solid #%s; }', $this['config']->get('menu_item_tb_color'));
$css[] .= sprintf('.menu-dropdown > li:before { border-right: 1px solid #%s; }', $this['config']->get('menu_item_tb_color'));
$css[] .= sprintf('.menu-dropdown > li:before { border-left: 1px solid #%s; }', $this['config']->get('menu_item_bb_color'));
$css[] .= sprintf('.menu-dropdown li.level2, .menu-dropdown span.level2 > span { border-bottom: 1px solid #%s; }', $this['config']->get('menu_item_bb_color'));
$css[] .= sprintf('.menu-dropdown a.level2:hover, .menu-dropdown a.level3:hover { background-color: #%s; }', $this['config']->get('menu_item_bg_hover_color'));
$css[] .= sprintf('.menu-dropdown a.level2:hover, .menu-dropdown a.level3:hover, .menu-dropdown a.level2:hover span.subtitle { color: #%s; }', $this['config']->get('menu_item_font_hover_color'));
$css[] .= sprintf('.menu-dropdown a.current.level2, .menu-dropdown a.current.level3 { background-color: #%s; }', $this['config']->get('menu_item_bg_current_color'));
$css[] .= sprintf('.menu-dropdown a.current.level2, .menu-dropdown a.current.level3, .menu-dropdown a.current.level2 span.subtitle { color: #%s; }', $this['config']->get('menu_item_font_current_color'));
$css[] .= sprintf('.menu-dropdown span.level2 > span { background-color: #%s; }', $this['config']->get('menu_item_bg_sep_color'));
$css[] .= sprintf('.menu-dropdown .dropdown-bg > div { border: 6px solid #%s; }', $this['config']->get('menu_bg_border_color'));

// headings
$css[] .= sprintf('h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong, .module-title .color { color: #%s; }', $this['config']->get('title_span_color'));
$css[] .= sprintf('h1, h2, h3, h4, h5, h6, blockquote strong, blockquote p strong, .result h3, header h1.title a { color: #%s; }', $this['config']->get('heading_color'));
$css[] .= sprintf('.header-content .module-title, .header-content, #slide-zone, #slide-zone h2 { color: #%s; }', $this['config']->get('header_content_color'));

// buttons
$css[] .= sprintf('a.button-color, button.button-color, input[type="submit"].button-color, input[type="submit"].subbutton, input[type="reset"].button-color, input[type="button"].button-color, #system .pagination strong, .event-time .month, .block-number .bottom, .section-title, .jqTransformSelectWrapper ul a.selected, ul.white-top a.current, ul.white-top a.current:hover, #newsletter .module-title, ul.gkTabs li.active, ul.gkTabs li.active:hover { background-color: #%s !important; }', $this['config']->get('button_bg_color'));
$css[] .= sprintf('a.button-color, button.button-color, input[type="submit"].button-color, input[type="submit"].subbutton, input[type="reset"].button-color, input[type="button"].button-color, #system .pagination strong, .event-time .month, .block-number .bottom, .section-title, .jqTransformSelectWrapper ul a.selected, ul.white-top a.current, ul.white-top a.current:hover, #newsletter .module-title, ul.gkTabs li.active, ul.gkTabs li.active:hover { color: #%s !important; }', $this['config']->get('button_color'));
$css[] .= sprintf('a.button-color, button.button-color, input[type="submit"].button-color, input[type="submit"].subbutton, input[type="reset"].button-color, input[type="button"].button-color, #system .pagination strong, .event-time .month, .block-number .bottom, ul.gkTabs li.active, ul.gkTabs, .jqTransformSelectWrapper ul a.selected, .jqTransformSelectWrapper ul a.selected:hover { border-color: #%s !important; }', $this['config']->get('button_border_color'));

// widgets
$css[] .= sprintf('.mejs-controls .mejs-time-rail .mejs-time-loaded { background-color: #%s !important; }', $this['config']->get('media_track_color'));
$css[] .= sprintf('.mod-color { background-color: #%s; }', $this['config']->get('block_color'));
$css[] .= sprintf('.mod-color { border: 1px solid #%s; }', $this['config']->get('block_border_color'));
$css[] .= sprintf('.mod-color { color: #%s; }', $this['config']->get('block_font_color'));

// generate css for 3-column-layout
$sidebar_a       = '';
$sidebar_b       = '';
$maininner_width = intval($this['config']->get('template_width'));
$sidebar_a_width = intval($this['config']->get('sidebar-a_width'));
$sidebar_b_width = intval($this['config']->get('sidebar-b_width'));
$rtl             = $this['config']->get('direction') == 'rtl';
$body_config	 = array();

// set widths
if ($this['modules']->count('sidebar-a')) {
	$sidebar_a = $this['config']->get('sidebar-a'); 
	$maininner_width -= $sidebar_a_width;
	$css[] = sprintf('#sidebar-a { width: %dpx; }', $sidebar_a_width);
}

if ($this['modules']->count('sidebar-b')) {
	$sidebar_b = $this['config']->get('sidebar-b'); 
	$maininner_width -= $sidebar_b_width;
	$css[] = sprintf('#sidebar-b { width: %dpx; }', $sidebar_b_width);
}

$css[] = sprintf('#maininner { width: %dpx; }', $maininner_width);

// all sidebars right
if (($sidebar_a == 'right' || !$sidebar_a) && ($sidebar_b == 'right' || !$sidebar_b)) {
	$sidebar_classes = 'sidebar-a-right sidebar-b-right';

// all sidebars left
} else if (($sidebar_a == 'left' || !$sidebar_a) && ($sidebar_b == 'left' || !$sidebar_b)) {
	$sidebar_classes = 'sidebar-a-left sidebar-b-left';
	$css[] = sprintf('#maininner { float: %s; }', $rtl ? 'left' : 'right');

// sidebar-a left and not sidebar-b
} else if ($sidebar_a == 'left') {
	$sidebar_classes = 'sidebar-a-left sidebar-b-right';
	$css[] = '#maininner, #sidebar-a { position: relative; }';
	$css[] = sprintf('#maininner { %s: %dpx; }', $rtl ? 'right' : 'left', $sidebar_a_width);
	$css[] = sprintf('#sidebar-a { %s: -%dpx; }', $rtl ? 'right' : 'left', $maininner_width);

// sidebar-b left and not sidebar-a
} else if ($sidebar_b == 'left') {
	$sidebar_classes = 'sidebar-a-right sidebar-b-left';
	$css[] = '#maininner, #sidebar-a, #sidebar-b { position: relative; }';
	$css[] = sprintf('#maininner, #sidebar-a { %s: %dpx; }', $rtl ? 'right' : 'left', $sidebar_b_width);
	$css[] = sprintf('#sidebar-b { %s: -%dpx; }', $rtl ? 'right' : 'left', $maininner_width + $sidebar_a_width);
}

// generate css for dropdown menu
foreach (array(1 => '.dropdown', 2 => '.columns2', 3 => '.columns3', 4 => '.columns4') as $i => $class) {
	$css[] = sprintf('#menu %s { width: %dpx; }', $class, $i * intval($this['config']->get('menu_width')));
}

// load css
$this['asset']->addFile('css', 'css:base.css');
$this['asset']->addFile('css', 'css:extensions.css');
$this['asset']->addFile('css', 'css:tools.css');
$this['asset']->addFile('css', 'css:layout.css');
$this['asset']->addFile('css', 'css:menus.css');
$this['asset']->addString('css', implode("\n", $css));
$this['asset']->addFile('css', 'css:modules.css');
$this['asset']->addFile('css', 'css:system.css');
$this['asset']->addFile('css', 'css:custom.css');
if (($font = $this['config']->get('font1')) && $this['path']->path("css:/font1/$font.css")) { $this['asset']->addFile('css', "css:/font1/$font.css"); }
if (($font = $this['config']->get('font2')) && $this['path']->path("css:/font2/$font.css")) { $this['asset']->addFile('css', "css:/font2/$font.css"); }
if (($font = $this['config']->get('font3')) && $this['path']->path("css:/font3/$font.css")) { $this['asset']->addFile('css', "css:/font3/$font.css"); }
$this['asset']->addFile('css', 'css:style.css');
if ($this['config']->get('direction') == 'rtl') $this['asset']->addFile('css', 'css:rtl.css');
$this['asset']->addFile('css', 'css:print.css');

// load fonts
$http  = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$fonts = array(
	'bebas' => 'template:fonts/bebas.css',
	'droidsans' => 'template:fonts/droidsans.css',
	'economica' => 'template:fonts/economica.css',
	'opensans' => 'template:fonts/opensans.css',
	'gudea' => $http.'://fonts.googleapis.com/css?family=Gudea',
	'istok' => $http.'://fonts.googleapis.com/css?family=Istok+Web',
	'marvel' => $http.'://fonts.googleapis.com/css?family=Marvel',
	'mavenpro' => $http.'://fonts.googleapis.com/css?family=Maven+Pro',
	'patuaone' => $http.'://fonts.googleapis.com/css?family=Patua+One',
	'play' => $http.'://fonts.googleapis.com/css?family=Play',
	'ropasans' => $http.'://fonts.googleapis.com/css?family=Ropa+Sans',
	'signika' => $http.'://fonts.googleapis.com/css?family=Signika+Negative',
	'yanonekaffeesatz' => $http.'://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:regular,light');


foreach (array_unique(array($this['config']->get('font1'), $this['config']->get('font2'), $this['config']->get('font3'))) as $font) {
	if (isset($fonts[$font])) {
		$this['asset']->addFile('css', $fonts[$font]);
	}
}

// set body css classes
$body_classes  = $sidebar_classes.' ';
$body_classes .= $this['system']->isBlog() ? 'isblog ' : 'noblog ';
$body_classes .= $this['config']->get('page_class');

$this['config']->set('body_classes', $body_classes);

// add social buttons
$body_config['twitter'] = (int) $this['config']->get('twitter', 0);
$body_config['plusone'] = (int) $this['config']->get('plusone', 0);
$body_config['facebook'] = (int) $this['config']->get('facebook', 0);

$this['config']->set('body_config', json_encode($body_config));

// add javascripts
$this['asset']->addFile('js', 'js:warp.js');
$this['asset']->addFile('js', 'js:accordionmenu.js');
$this['asset']->addFile('js', 'js:dropdownmenu.js');
$this['asset']->addFile('js', 'js:template.js');
$this['asset']->addFile('js', 'js:script.js');

// internet explorer
if ($this['useragent']->browser() == 'msie') {

	$filters = array('CSSImportResolver', 'CSSRewriteURL', 'CSSCompressor');

	// prepare assets
	$assets['ie.css']  = $this['asset']->cache('ie.css', $this['asset']->createFile('css:ie.css'), $filters);
	$assets['ie7.css'] = $this['asset']->cache('ie7.css', $this['asset']->createFile('css:ie7.css'), $filters);
	$assets['ie8.css'] = $this['asset']->cache('ie8.css', $this['asset']->createFile('css:ie8.css'), $filters);

	// add conditional comments
	$head[] = sprintf('<!--[if lte IE 8]>%s<script src="%s"></script><![endif]-->', ($url = $assets['ie.css']->getUrl()) ? sprintf('<link rel="stylesheet" href="%s" />', $url) : sprintf('<style>%s</style>', $assets['ie.css']->getContent($this['assetfilter']->create($filters))), $this['path']->url('js:html5.js'));
	$head[] = sprintf('<!--[if IE 7]>%s<![endif]-->', ($url = $assets['ie7.css']->getUrl()) ? sprintf('<link rel="stylesheet" href="%s" />', $url) : sprintf('<style>%s</style>', $assets['ie7.css']->getContent($this['assetfilter']->create($filters))));
	$head[] = sprintf('<!--[if IE 8]>%s<![endif]-->', ($url = $assets['ie8.css']->getUrl()) ? sprintf('<link rel="stylesheet" href="%s" />', $url) : sprintf('<style>%s</style>', $assets['ie8.css']->getContent($this['assetfilter']->create($filters))));
	$head[] = sprintf('<!--[if IE 9]>%s<![endif]-->', ($url = $assets['ie.css']->getUrl()) ? sprintf('<link rel="stylesheet" href="%s" />', $url) : sprintf('<style>%s</style>', $assets['ie.css']->getContent($this['assetfilter']->create($filters))));

}

// add $head
if (isset($head)) {
	$this['template']->set('head', implode("\n", $head));
}