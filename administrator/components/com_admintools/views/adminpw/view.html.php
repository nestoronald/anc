<?php
/**
 *  @package AdminTools
 *  @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 *  @license GNU General Public License version 3, or later
 *  @version $Id$
 */

// Protect from unauthorized access
defined('_JEXEC') or die();

// Load framework base classes
jimport('joomla.application.component.view');

class AdmintoolsViewAdminpw extends FOFViewHtml
{
	protected function onBrowse($tpl = null)
	{
		$model = $this->getModel();

		$this->assign('username',		FOFInput::getVar('username','', $this->input));
		$this->assign('password',		FOFInput::getVar('password','', $this->input));
		$this->assign('adminLocked',	$model->isLocked());
	}
}