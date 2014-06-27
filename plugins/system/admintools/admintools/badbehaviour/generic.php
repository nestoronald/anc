<?php
/*
Bad Behavior - detects and blocks unwanted Web accesses
Copyright (C) 2005,2006,2007,2008,2009,2010,2011 Michael Hampton

Bad Behavior is free software; you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License as published by the Free
Software Foundation; either version 3 of the License, or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along
with this program. If not, see <http://www.gnu.org/licenses/>.

Please report any problems to bad . bots AT ioerror DOT us
http://www.bad-behavior.ioerror.us/
*/

###############################################################################
###############################################################################

// Bad Behavior callback functions.

// Return current time in the format preferred by your database.
function bb2_db_date() {
	return gmdate('Y-m-d H:i:s');	// Example is MySQL format
}

// Return affected rows from most recent query.
function bb2_db_affected_rows() {
	return false;
}

// Escape a string for database usage
function bb2_db_escape($string) {
	// return mysql_real_escape_string($string);
	return $string;	// No-op when database not in use.
}

// Return the number of rows in a particular query.
function bb2_db_num_rows($result) {
	if ($result !== FALSE)
		return count($result);
	return 0;
}

// Run a query and return the results, if any.
// Should return FALSE if an error occurred.
// Bad Behavior will use the return value here in other callbacks.
function bb2_db_query($query) {
	return FALSE;
}

// Return all rows in a particular query.
// Should contain an array of all rows generated by calling mysql_fetch_assoc()
// or equivalent and appending the result of each call to an array.
function bb2_db_rows($result) {
	return $result;
}

// Create the SQL query for inserting a record in the database.
// See example for MySQL elsewhere.
function bb2_insert($settings, $package, $key)
{
	return "--";
}

// Return emergency contact email address.
function bb2_email() {
	return "example@example.com";	// You need to change this.
}

// retrieve settings from database
// Settings are hard-coded for non-database use
function bb2_read_settings() {
	global $bb2_settings_defaults;
	return $bb2_settings_defaults;
}

// write settings to database
function bb2_write_settings($settings) {
	return false;
}

// installation
function bb2_install() {
	return false;
}

// Screener
// Insert this into the <head> section of your HTML through a template call
// or whatever is appropriate. This is optional we'll fall back to cookies
// if you don't use it.
function bb2_insert_head() {
	global $bb2_javascript;
	echo $bb2_javascript;
}

// Display stats? This is optional.
function bb2_insert_stats($force = false) {
}

// Return the top-level relative path of wherever we are (for cookies)
// You should provide in $url the top-level URL for your site.
function bb2_relative_path() {
	$uri = JURI::getInstance();
	$path = $uri->toString(array('path'));
	return $path;
}
?>