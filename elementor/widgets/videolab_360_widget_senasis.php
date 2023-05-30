<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
 
/**
 * idt Header Logo Widget.
 *
 * @since 1.0
 */
class Videolab_360_widget extends Widget_Base {

	public function get_name() {
		return 'videolab_360_widget';
	}

	public function get_title() {
		return esc_html__( 'Video Lab 360 widget', VLAB360_LANG );
	}

	public function get_icon() {
		return 'fa fa-pencil';
	}

	public function get_categories() {
		return array( 'videolab360-category' );
	}

	/**
	 * Register widget controls.
	 *
	 * @since 1.0
	 */
	protected function _register_controls() {

		$shortcodes=videolab360_get_records();

		$this->start_controls_section(
			'content_tab',
			[
				'label' => esc_html__( 'Content', VLAB360_LANG ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'shortcode',
			[
				'label' => esc_html__( 'Choose 360 Photo', 'elementor' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'st1',
				'options' => $shortcodes,
				'prefix_class' => 'elementor-button-',
			]
		);
		//['.VLAB360_SHORTCODE.' id="'.$id.'"]

		$this->end_controls_section();





	}


	/**
	 * Render widget output on the frontend.
	 *
	 * @since 1.0
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		echo var_export($settings['shortcode'],true);
        //echo do_shortcode($settings['shortcode']);


	}

	/**
	 * Render widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
		?>

		{{{ settings.shortcode }}}

		<?php 
	}
}

Plugin::instance()->widgets_manager->register_widget_type( new videolab_360_widget() );