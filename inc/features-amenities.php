<?php
/**
 * Displays the Features and Amentites for 'page-amenities.php'
 *
 * @package Cider_Mill_Apartments
 */

function cider_mill_features_amenities() {

    if( is_page_template( 'page-amenities.php' ) ) {

        $f_disclaimer = get_field( 'features_disclaimer' );
        $a_disclaimer = get_field( 'amenities_disclaimer' );

        // FEATURES SECTION
        if( have_rows('features') ): ?>

            <div id="features-section">
                <header class="section-header">
                    <h2>Apartment Features</h2>
                </header>
                <div class="features-wrapper">

                    <?php while( have_rows('features') ): the_row();

                        $img_url = get_sub_field('image');
                        $title   = get_sub_field('title');

                        if(!empty($img_url) ) { ?>

                            <div class="highlight">
                                <div class="highlight-inner has-img" style="background-image:url(<?php echo esc_attr( $img_url ); ?>)">

                                    <div class="highlight-inner-content">

                                        <?php if( !empty($title) ) : ?>
                                            <span class="title"><?php echo esc_html($title); ?></span>
                                        <?php endif; ?>

                                        <button class="view">View</button>
                                        <button class="close">X</button>

                                    </div>
                                </div>
                            </div><!-- highlight -->

                        <?php

                        } else { ?>

                            <div class="highlight">
                                <div class="highlight-inner">

                                    <div class="highlight-inner-content">

                                        <?php if( !empty($title) ) : ?>
                                            <span class="title"><?php echo esc_html($title); ?></span>
                                        <?php endif; ?>

                                    </div>
                                </div>
                            </div><!-- highlight -->

                        <?php }

                    endwhile; ?>

                </div><!-- features-wrapper -->
                <div class="disclaimer"><?php echo $f_disclaimer; ?></div>
            </div><!-- features-section -->

        <?php endif;

        // AMENITIES SECTION =================================================

    }
}