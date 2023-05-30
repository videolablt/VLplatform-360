<?php
/**
 * Виджет карты
 */
namespace VIDEOLAB360_Elementor_Gallery\Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Widget extends \Elementor\Widget_Base {

	/**
	 * Retrieve heading widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'videolab360_gallery';
	}

	/**
	 * Retrieve heading widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget title.
	 */
	public function get_title() {
		return __( 'Videolab 360 Photo', 'elementor' );
	}

	/**
	 * Retrieve heading widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-sync';
	}

	/**
	 * Retrieve the list of categories the widget belongs to.
	 *
	 * Used to determine where to display the widget in the editor.
	 *
	 * Note that currently Elementor supports only one category.
	 * When multiple categories passed, Elementor uses the first one.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'VIDEOLAB360' ];
	}

	public function get_script_depends() {
		return array();
	}


	/**
	 * Register yandex maps widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function _register_controls() {
		$shortcodes=videolab360_get_records();
		
		//$shortcodes=array('111'=>'Pirmas');
		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'shortcode',
			[
				'label' => esc_html__( 'Choose 360 Photo', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'st1',
				'options' => $shortcodes,
				'prefix_class' => 'elementor-button-',
			]
		);

		$this->end_controls_section();


	}

	/**
	 * Render yandex maps widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function _content_template() {

		?>
		<h3>{{{ settings.shortcode }}}</h3>
		<?php
	}

	/**
	 * Render yandex maps widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		echo do_shortcode('['.VLAB360_SHORTCODE.' id="'.$settings["shortcode"].'"]');
	}
}

// eof;
