<?php
/**
* @package   abana_j25
* @author    arrowthemes http://themeforest.net/user/arrowthemes/portfolio/?ref=arrowthemes
* @copyright Copyright (C) arrowthemes 
*/

// add css
$this['asset']->addFile('css', 'css:base.css');
$this['asset']->addFile('css', 'css:layout.css');
$this['asset']->addFile('css', 'css:modules.css');
$this['asset']->addFile('css', 'css:tools.css');
$this['asset']->addFile('css', 'css:system.css');
$this['asset']->addFile('css', 'css:custom.css');
$this['asset']->addFile('css', 'css:style.css');
$this['asset']->addFile('css', 'css:mobile.css');

// add js
$this['asset']->addFile('js', 'js:warp.js');
$this['asset']->addFile('js', 'js:script-mobile.js');

// set body css classes
$body_classes  = $this['system']->isBlog() ? 'isblog ' : 'noblog ';
$body_classes .= $this['config']->get('page_class');
$this['config']->set('body_classes', $body_classes);