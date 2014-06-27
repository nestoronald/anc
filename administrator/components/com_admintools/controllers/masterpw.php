<?php
/**
 *  @package AdminTools
 *  @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 *  @license GNU General Public License version 3, or later
 *  @version $Id$
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

jimport('joomla.application.component.controller');

class AdmintoolsControllerMasterpw extends FOFController
{
	public function __construct($config = array()) {
		parent::__construct($config);
		$this->modelName = 'masterpw';
	}
	
	public function execute($task) {
		if($task != 'save') $task = 'browse';
		parent::execute($task);
	}
	
	public function save()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$masterpw = FOFInput::getVar('masterpw','', $this->input);
		$views = FOFInput::getVar('views', array(), $this->input, 'array', 2);
		
		$restrictedViews = array();
		foreach($views as $view => $locked)
		{
			if($locked == 1) $restrictedViews[] = $view;
		}
		
		$model = $this->getModel('Masterpw');
		$model->saveSettings($masterpw, $restrictedViews);
		
		$this->setRedirect('index.php?option=com_admintools', JText::_('ATOOLS_LBL_MASTERPW_SAVED'));
	}
}
