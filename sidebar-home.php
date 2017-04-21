<?php
/**
 * Custom sidebar for the homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Cider_Mill_Apartments
 */

?>

<aside id="secondary" class="widget-area" role="complementary">
        <?php if ( function_exists( 'cider_mill_homepage_sidebar' ) ) {
            cider_mill_homepage_sidebar();
        } ?>
</aside><!-- #secondary -->