<?php
/**
 *  @package AdminTools
 *  @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 *  @license GNU General Public License version 3, or later
 *  @version $Id$
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

class AdmintoolsControllerFixpermsconfig extends FOFController
{
	public function __construct($config = array()) {
		parent::__construct($config);
		
		$this->modelName = 'Fixpermsconfig';
	}
	
	public function execute($task) {
		if(!in_array($task, array('savedefaults','saveperms','saveapplyperms'))) $task = 'browse';
		$this->getThisModel()->setState('task',$task);
		parent::execute($task);
	}

	public function savedefaults()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$model = $this->getThisModel();
		$model->setState('dirperms', FOFInput::getCmd('dirperms','0755', $this->input));
		$model->setState('fileperms', FOFInput::getCmd('fileperms','0644', $this->input));
		$model->saveDefaults();

		$message = JText::_('ATOOLS_LBL_FIXPERMSCONFIG_DEFAULTSSAVED');
		$this->setRedirect('index.php?option=com_admintools&view=fixpermsconfig', $message);
	}

	public function onBeforeBrowse()
	{
		$path = FOFInput::getVar('path','', $this->input);

		$model = $this->getThisModel();
		$model->setState('path',$path);
		$model->applyPath();
		
		return true;
	}

	/**
	 * Saves the custom permissions and reloads the current view
	 */
	public function saveperms()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$this->save_custom_permissions();
		
		$message = JText::_('ATOOLS_LBL_FIXPERMSCONFIG_CUSTOMSAVED');
		$path = FOFInput::getVar('path','', $this->input);
		$this->setRedirect('index.php?option=com_admintools&view=fixpermsconfig&path='.urlencode($path), $message);
	}
	
	/**
	 * Saves the custom permissions, applies them and reloads the current view
	 */
	public function saveapplyperms()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$this->save_custom_permissions(true);
		
		$message = JText::_('ATOOLS_LBL_FIXPERMSCONFIG_CUSTOMSAVEDAPPLIED');
		$path = FOFInput::getVar('path','', $this->input);
		$this->setRedirect('index.php?option=com_admintools&view=fixpermsconfig&path='.urlencode($path), $message);
	}
	
	private function save_custom_permissions($apply = false)
	{
		$path = FOFInput::getVar('path','', $this->input);

		$model = $this->getThisModel();
		$model->setState('path',$path);
		$model->applyPath();

		$folders = FOFInput::getVar('folders', array(), $this->input, 'array', $mask = 2);
		$model->setState('folders', $folders);
		$files = FOFINput::getVar('files', array(), $this->input, 'array', $mask = 2);
		$model->setState('files', $files);

		$model->savePermissions($apply);
	}
}
