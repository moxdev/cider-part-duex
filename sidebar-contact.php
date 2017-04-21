<?php
/**
 * The sidebar for the Contact Page page-contact.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Cider_Mill_Apartments
 */

?>

<aside id="secondary" class="widget-area" role="complementary">

    <div class="map-wrapper">
        <div id="map-canvas"></div>
        <form id="get-directions">
            <label>find us
                <input type="text" id="start" placeholder="ENTER STARTING ADDRESS">
                <input type="hidden" id="end" value="39.156413, -77.201441">
            </label>
            <div id="response-panel"></div>
            <input type="submit" value="Get Directions">
        </form>
    </div> <!-- map-wrapper -->

    <?php if ( function_exists( 'cider_mill_specials_sidebar' ) ) {
        cider_mill_specials_sidebar();
    } ?>

</aside><!-- #secondary -->