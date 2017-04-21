<?php
/**
 * Content Tagline shows at the bottom of the content on all pages.
 *
 * @package Cider_Mill_Apartments
 */

function cider_mill_content_tagline() {
    if ( function_exists( 'get_field' ) ) {
        $tagline = get_field( 'content_tagline' );

        if( !empty($tagline) ) : ?>
            <p class="content-tagline"><?php echo $tagline; ?></p>
        <?php endif;
    }
}