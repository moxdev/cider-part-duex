<?php
/**
 * Floorplan
 *
 * @package Cider_Mill_Apartments
 */

function cider_mill_floorplan_listing() { ?>
    <div id="floorplans-section">
        <div class="floorplans-wrapper">
            <div class='fp-models'>

                <?php if( have_rows('one_bedroom_floor_plans', 'options') ): ?>

                    <header class="section-header">
                        <h2>One Bedroom</h2>
                    </header>

                    <div class="one-bedroom-section">

                        <button class="view-btn">view floor plans &#43;</button>

                        <div class="view-hide-wrapper">

                            <div class="fp-models-wrapper">

                            <?php while ( have_rows('one_bedroom_floor_plans', 'options') ) : the_row();

                                $desc    = get_sub_field('description', 'options');
                                $sqft    = get_sub_field('square_footage', 'options');
                                $img     = get_sub_field('floorplan_image', 'options');
                                $url     = get_sub_field('availability_link_url', 'options');
                                $page_id = get_sub_field('url_fpid', 'options');
                                $page_link = "{$url}?plan_id={$page_id}"; ?>

                                    <div class="floorplan">

                                        <?php if( !empty($img) ): ?>
                                            <a href="<?php echo $img['url']; ?>" class="fp-trigger" data-imagelightbox="c"><img src="<?php echo $img['sizes']['floor-plan-image']; ?>" alt="<?php echo $img['alt']; ?>" description="<?php echo $img['description']; ?>"></a>
                                         <?php endif; ?>

                                        <?php if( !empty($desc) ) : ?>
                                            <div class="description"><?php echo $desc; ?></div>
                                        <?php endif; ?>

                                        <?php if( !empty($sqft) ) : ?>
                                            <div class="sqft"><?php echo $sqft; ?> sq ft</div>
                                        <?php endif; ?>

                                        <?php if( !empty($url) ) : ?>
                                            <a class="availability-link" href="<?php echo $page_link; ?>" target="_blank"><button>view all availability &raquo;</button></a>
                                        <?php endif; ?>


                                    </div>

                            <?php endwhile; ?>

                            </div><!-- fp-models-wrapper -->

                        </div><!-- view-hide-wrapper -->

                    </div><!-- one-bedroom-section -->
                <?php endif;

                if( have_rows('two_bedroom_floor_plans', 'options') ): ?>
                    <header class="section-header">
                        <h2>Two Bedroom</h2>
                    </header>

                    <div class="two-bedroom-section">

                        <button class="view-btn view">view floor plans &#43;</button>

                        <div class="view-hide-wrapper">

                            <div class="fp-models-wrapper">

                            <?php while ( have_rows('two_bedroom_floor_plans', 'options') ) : the_row();

                                $desc    = get_sub_field('description', 'options');
                                $sqft    = get_sub_field('square_footage', 'options');
                                $img     = get_sub_field('floorplan_image', 'options');
                                $url     = get_sub_field('availability_link_url', 'options');
                                $page_id = get_sub_field('url_fpid', 'options');
                                $page_link = "{$url}?plan_id={$page_id}"; ?>

                                    <div class="floorplan">

                                        <?php if( !empty($img) ): ?>
                                            <a href="<?php echo $img['url']; ?>" class="fp-trigger" data-imagelightbox="c"><img src="<?php echo $img['sizes']['floor-plan-image']; ?>" alt="<?php echo $img['alt']; ?>" description="<?php echo $img['description']; ?>"></a>
                                         <?php endif; ?>

                                        <?php if( !empty($desc) ) : ?>
                                            <div class="description"><?php echo $desc; ?></div>
                                        <?php endif; ?>

                                        <?php if( !empty($sqft) ) : ?>
                                            <div class="sqft"><?php echo $sqft; ?> sq ft</div>
                                        <?php endif; ?>

                                        <?php if( !empty($url) ) : ?>
                                            <a class="availability-link" href="<?php echo $page_link; ?>" target="_blank"><button>view all availability &raquo;</button></a>
                                        <?php endif; ?>


                                    </div>

                            <?php endwhile; ?>

                            </div><!-- fp-models-wrapper -->

                        </div><!-- view-hide-wrapper -->
                    </div><!-- two-bedroom-section -->
                <?php endif;

                if( have_rows('three_bedroom_floor_plans', 'options') ): ?>

                    <header class="section-header">
                        <h2>Three Bedroom</h2>
                    </header>

                    <div class="three-bedroom-section">

                        <button class="view-btn view">view floor plans &#43;</button>

                        <div class="view-hide-wrapper">

                            <div class="fp-models-wrapper">

                            <?php while ( have_rows('three_bedroom_floor_plans', 'options') ) : the_row();

                                $desc    = get_sub_field('description', 'options');
                                $sqft    = get_sub_field('square_footage', 'options');
                                $img     = get_sub_field('floorplan_image', 'options');
                                $url     = get_sub_field('availability_link_url', 'options');
                                $page_id = get_sub_field('url_fpid', 'options');
                                $page_link = "{$url}?plan_id={$page_id}"; ?>

                                    <div class="floorplan">

                                        <?php if( !empty($img) ): ?>
                                            <a href="<?php echo $img['url']; ?>" class="fp-trigger" data-imagelightbox="c"><img src="<?php echo $img['sizes']['floor-plan-image']; ?>" alt="<?php echo $img['alt']; ?>" description="<?php echo $img['description']; ?>"></a>
                                         <?php endif; ?>

                                        <?php if( !empty($desc) ) : ?>
                                            <div class="description"><?php echo $desc; ?></div>
                                        <?php endif; ?>

                                        <?php if( !empty($sqft) ) : ?>
                                            <div class="sqft"><?php echo $sqft; ?> sq ft</div>
                                        <?php endif; ?>

                                        <?php if( !empty($url) ) : ?>
                                            <a class="availability-link" href="<?php echo $page_link; ?>" target="_blank"><button>view all availability &raquo;</button></a>
                                        <?php endif; ?>


                                    </div>

                            <?php endwhile; ?>

                            </div><!-- fp-models-wrapper -->

                        </div><!-- view-hide-wrapper -->
                    </div><!-- three-bedroom-section -->
                <?php endif; ?>

            </div>

        </div><!-- floorplans-wrapper -->
    </div><!-- floorplans-section -->

<?php

}



