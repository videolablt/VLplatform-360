<?php
/**
 * Elementor_VLAB360 class.
 *
 * @category   Class
 * @package    ElementorVLAB360
 * @subpackage WordPress
 * @author     Ben Marshall <me@benmarshall.me>
 * @copyright  2020 Ben Marshall
 * @license    https://opensource.org/licenses/GPL-3.0 GPL-3.0-only
 * @link       link(https://www.benmarshall.me/build-custom-elementor-widgets/,
 *             Build Custom Elementor Widgets)
 * @since      1.0.0
 * php version 7.3.9
 */
if ( ! defined( 'ABSPATH' ) ) {
	// Exit if accessed directly.
	exit;
}
/**
 * Main Elementor VLAB360 Class
 *
 * The init class that runs the Elementor VLAB360 plugin.
 * Intended To make sure that the plugin's minimum requirements are met.
 *
 * You should only modify the constants to match your plugin's needs.
 *
 * Any custom code should go inside Plugin Class in the class-widgets.php file.
 */
final class Elementor_VLAB360 {
	/**
	 * Plugin Version
	 *
	 * @since 1.0.0
	 * @var string The plugin version.
	 */
	const VERSION = '1.0.0';
	/**
	 * Minimum Elementor Version
	 *
	 * @since 1.0.0
	 * @var string Minimum Elementor version required to run the plugin.
	 */
	const MINIMUM_ELEMENTOR_VERSION = '2.0.0';
	/**
	 * Minimum PHP Version
	 *
	 * @since 1.0.0
	 * @var string Minimum PHP version required to run the plugin.
	 */
	const MINIMUM_PHP_VERSION = '7.0';
	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		// Initialize the plugin.
		add_action( 'plugins_loaded', array( $this, 'init' ) );
	}

	/**
	 * Initialize the plugin
	 *
	 * Validates that Elementor is already loaded.
	 * Checks for basic plugin requirements, if one check fail don't continue,
	 * if all check have passed include the plugin class.
	 *
	 * Fired by `plugins_loaded` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init() {
		
		// Check if Elementor installed and activated.
		if ( ! did_action( 'elementor/loaded' ) ) {
			add_action( 'admin_notices', array( $this, 'admin_notice_missing_main_plugin' ) );
			return;
		}
		// Check for required Elementor version.
		if ( ! version_compare( ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=' ) ) {
			add_action( 'admin_notices', array( $this, 'admin_notice_minimum_elementor_version' ) );
			return;
		}

		// Once we get here, We have passed all validation checks so we can safely include our widgets.
		add_action( 'elementor/init', array( $this, 'widgets_registered' ) );

		
	}
	public function videolab360_Elementor_Widgets_category( $elements_manager ) {
		$elements_manager->add_category(
			'videolab360-category',
			[
				'title' => esc_html__( 'Video Lab 360', VLAB360_LANG ),
				'icon' => 'eicon-sync',
			]
		);  
	}
	//widgets
	public function widgets_registered() {
		add_action( 'elementor/elements/categories_registered', array( $this, 'videolab360_Elementor_Widgets_category' ) );
		$widget_file = VLAB360_DIR . "/elementor/widgets/example_widget.php";
		// We check if the Elementor plugin has been installed / activated.
		if(defined('ELEMENTOR_PATH') && class_exists('Elementor\Widget_Base')){

			// We look for any theme overrides for this custom Elementor element.
			// If no theme overrides are found we use the default one in this plugin.

			
			$template_file = locate_template($widget_file);
			if ( !$template_file || !is_readable( $template_file ) ) {
				$template_file = $widget_file;
			}
			if ( $template_file && is_readable( $template_file ) ) {
				require_once $template_file;
			}
		}
		if ( defined( 'ELEMENTOR_PATH' ) && class_exists( 'Elementor\Widget_Base' ) ) {
			// get our own widgets up and running:
			// copied from widgets-manager.php

			if ( class_exists( 'Elementor\Plugin' ) ) {
				if ( is_callable( 'Elementor\Plugin', 'instance' ) ) {
					$elementor = Elementor\Plugin::instance();
					if ( isset( $elementor->widgets_manager ) ) {
						if ( method_exists( $elementor->widgets_manager, 'register_widget_type' ) ) {
							$template_file = locate_template( $widget_file );
							if ( $template_file && is_readable( $template_file ) ) {
								require_once $template_file;
								Elementor\Plugin::instance()->widgets_manager->register_widget_type( new Elementor\ElementorVLAB360() );

							}
						}
					}
				}
			}
		}
	}
	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have Elementor installed or activated.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function admin_notice_missing_main_plugin() {
		deactivate_plugins( plugin_basename( ELEMENTOR_VLAB360 ) );
		return sprintf(
			wp_kses(
				'<div class="notice notice-warning is-dismissible"><p><strong>"%1$s"</strong> requires <strong>"%2$s"</strong> to be installed and activated.</p></div>',
				array(
					'div' => array(
						'class'  => array(),
						'p'      => array(),
						'strong' => array(),
					),
				)
			),
			'Elementor VLAB360',
			'Elementor'
		);
	}
	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have a minimum required Elementor version.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function admin_notice_minimum_elementor_version() {
		deactivate_plugins( plugin_basename( ELEMENTOR_VLAB360 ) );
		return sprintf(
			wp_kses(
				'<div class="notice notice-warning is-dismissible"><p><strong>"%1$s"</strong> requires <strong>"%2$s"</strong> version %3$s or greater.</p></div>',
				array(
					'div' => array(
						'class'  => array(),
						'p'      => array(),
						'strong' => array(),
					),
				)
			),
			'Elementor VLAB360',
			'Elementor',
			self::MINIMUM_ELEMENTOR_VERSION
		);
	}
	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have a minimum required PHP version.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function admin_notice_minimum_php_version() {
		deactivate_plugins( plugin_basename( ELEMENTOR_VLAB360 ) );
		return sprintf(
			wp_kses(
				'<div class="notice notice-warning is-dismissible"><p><strong>"%1$s"</strong> requires <strong>"%2$s"</strong> version %3$s or greater.</p></div>',
				array(
					'div' => array(
						'class'  => array(),
						'p'      => array(),
						'strong' => array(),
					),
				)
			),
			'Elementor VLAB360',
			'Elementor',
			self::MINIMUM_ELEMENTOR_VERSION
		);
	}
}
// Instantiate Elementor_VLAB360.
new Elementor_VLAB360();
