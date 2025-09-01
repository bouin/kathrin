<?php
defined('TYPO3');

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;


// Add default RTE configuration
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['site_package'] = 'EXT:site_package/Configuration/RTE/Default.yaml';

// Add page TSconfig – Deprecated Deprecated Deprecated
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
//    '@import "EXT:site_package/Configuration/Sets/SitePackage/page.tsconfig"'
//);

// Add page TSconfig – Deprecated Deprecated Deprecated
//ExtensionManagementUtility::addPageTSConfig('
//   TCEMAIN.table.pages {
//      disablePrependAtCopy = 1
//   }
//');

// Add TypoScript
#\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
#    '@import "EXT:site_package/Configuration/TypoScript/setup.typoscript"'
#);
