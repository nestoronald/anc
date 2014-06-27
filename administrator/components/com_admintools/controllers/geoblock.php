<?php
/**
 *  @package AdminTools
 *  @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 *  @license GNU General Public License version 3, or later
 *  @version $Id$
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

class AdmintoolsControllerGeoblock extends FOFController
{
	public function __construct($config = array()) {
		parent::__construct($config);
		
		$this->modelName = 'geoblock';
	}
	
	public function execute($task) {
		if(!in_array($task, array('save','cancel','downloaddat'))) $task = 'browse';
		parent::execute($task);
	}
	
	public function save()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$continents = FOFInput::getVar('continent', array(), $this->input, 'array', 2);
		if(empty($continents)) {
			$continents = '';
		} else {
			$continents = array_keys($continents);
			$continents = implode(',', $continents);
		}
		
		$countries = FOFInput::getVar('country', array(), $this->input, 'array', 2);
		if(empty($countries)) {
			$countries = '';
		} else {
			$countries = array_keys($countries);
			$countries = implode(',', $countries);
		}
		
		$model = $this->getThisModel();
		$config = array('countries' => $countries, 'continents' => $continents);
		$model->saveConfig($config);
		
		$option = FOFInput::getCmd('option', 'com_foobar', $this->input);
		$view = FOFInput::getCmd('view', 'default', $this->input);
		$textkey = 'ATOOLS_LBL_'.strtoupper($view).'_SAVED';
		$url = 'index.php?option='.$option.'&view=waf';
		$this->setRedirect($url, JText::_($textkey));
		$this->redirect();
	}
	
	public function cancel()
	{
		// Redirect to the display task
		$option = FOFInput::getCmd('option','com_admintools', $this->input);
		$url = 'index.php?option='.$option.'&view=waf';
		$this->setRedirect($url);
		$this->redirect();
	}
	
	public function downloaddat()
	{
		$model = $this->getThisModel();
		
		$status = $model->downloadGeoIPDat();
		
		if($status) {
			$msg = JText::_('ATOOLS_GEOBLOCK_MSG_DOWNLOADEDGEOIPDAT');
			$msgType = 'message';
		} else {
			$msg = $model->getError();
			$msgType = 'error';
		}
		
		$option = FOFInput::getCmd('option','com_admintools', $this->input);
		$url = 'index.php?option='.$option.'&view=geoblock';
		$this->setRedirect($url, $msg, $msgType);
		$this->redirect();
	}
}