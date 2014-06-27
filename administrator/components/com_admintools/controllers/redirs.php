<?php
/**
 *  @package AdminTools
 *  @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 *  @license GNU General Public License version 3, or later
 *  @version $Id$
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

class AdmintoolsControllerRedirs extends FOFController
{
	public function copy()
	{
		// CSRF prevention
		$this->_csrfProtection();

		$model = $this->getThisModel();
		$model->setIDsFromRequest();
		$id = $model->getId();

		$item = $model->getItem();
		$key = $item->getKeyName();
		if($item->$key == $id)
		{
			$item->id = 0;
			$item->published = 0;
		}
		$status = $model->save($item);

		// redirect
		$option = FOFInput::getCmd('option', 'com_admintools', $this->input);
		$view = FOFInput::getCmd('view', 'default', $this->input);
		$url = 'index.php?option='.$option.'&view='.$view;
		if(!$status)
		{
			$this->setRedirect($url, $model->getError(), 'error');
		}
		else
		{
			$this->setRedirect($url);
		}
		$this->redirect();
	}
	
	public function applypreference() {
		$newState = FOFInput::getInt('urlredirection', 1, $this->input);
		$model = $this->getThisModel();
		$model->setRedirectionState($newState);
		
		$option = FOFInput::getCmd('option','com_admintools', $this->input);
		$view = FOFInput::getCmd('view','default', $this->input);
		$url = 'index.php?option='.$option.'&view='.$view;
		$this->setRedirect($url, JText::_('ATOOLS_LBL_REDIRS_PREFERENCE_SAVED'));
		
		$this->redirect();
	}
}
