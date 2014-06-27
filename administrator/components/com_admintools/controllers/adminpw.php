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

class AdmintoolsControllerAdminpw extends FOFController
{
	public function __construct($config = array()) {
		parent::__construct($config);
		
		$this->modelName = 'adminpw';
	}
	
	public function execute($task) {
		if(!in_array($task, array('protect','unprotect'))) $task = 'browse';
		parent::execute($task);
	}


	public function protect()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$username = FOFInput::getVar('username','', $this->input);
		$password = FOFInput::getVar('password','', $this->input);
		$password2 = FOFInput::getVar('password2','', $this->input);

		if(empty($username)) {
			$this->setRedirect('index.php?option=com_admintools&view=adminpw',JText::_('ATOOLS_ERR_ADMINPW_NOUSERNAME'),'error');
			return;
		}

		if(empty($password)) {
			$this->setRedirect('index.php?option=com_admintools&view=adminpw',JText::_('ATOOLS_ERR_ADMINPW_NOPASSWORD'),'error');
			return;
		}

		if($password != $password2) {
			$this->setRedirect('index.php?option=com_admintools&view=adminpw',JText::_('ATOOLS_ERR_ADMINPW_PASSWORDNOMATCH'),'error');
			return;
		}

		$model = $this->getThisModel();

		$model->username = $username;
		$model->password = $password;

		$status = $model->protect();
		$url = 'index.php?option=com_admintools';
		if($status)
		{
			$this->setRedirect($url,JText::_('ATOOLS_LBL_ADMINPW_APPLIED'));
		}
		else
		{
			$this->setRedirect($url,JText::_('ATOOLS_ERR_ADMINPW_NOTAPPLIED'),'error');
		}
	}

	public function unprotect()
	{
		// CSRF prevention
		$this->_csrfProtection();
		
		$model = $this->getThisModel();
		$status = $model->unprotect();
		$url = 'index.php?option=com_admintools';
		if($status)
		{
			$this->setRedirect($url,JText::_('ATOOLS_LBL_ADMINPW_UNAPPLIED'));
		}
		else
		{
			$this->setRedirect($url,JText::_('ATOOLS_ERR_ADMINPW_NOTUNAPPLIED'),'error');
		}
	}
}
