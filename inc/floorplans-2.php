<?php
/**
 * Floorplan Listing Page Content
 *
 * @package Cider_Mill_Apartments
 */

function cider_mill_floorplan_listing() {
    // check for rows (parent repeater)
    if( have_rows('floors') ): ?>
        <div id="floorplans-section">
            <div class="floorplans-wrapper">

            <!-- // loop through rows (parent repeater) -->
            <?php while( have_rows('floors') ): the_row();

                // check for rows (sub repeater)
                if( have_rows('one_bed') ): ?>

                    <div class="one-bedroom-section">

                    <?php while ( have_rows('one_bedroom_floor_plans', 'options') ) : the_row();
                        $desc = get_sub_field('description', 'options');
                        $sqft = get_sub_field('square_footage', 'options');
                        $image = get_sub_field('floorplan_image', 'options');
                        $url = get_sub_field('availability_link', 'options'); ?>

                        <div class="floorplan">
                            <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="">
                            <div class="description"><?php echo $desc; ?></div>
                            <div class="sqft"><?php echo $sqft; ?></div>
                            <a href="<?php echo $url; ?>"><button class="availability-link">view all availability &raquo;</button></a>
                        </div><!-- floorplan -->

                    <?php endwhile; ?>
                    </div><!-- one-bedroom-section -->
                <?php endif;

                // check for rows (sub repeater)
                if( have_rows('two_bed') ): ?>

                    <div class="one-bedroom-section">

                    <?php while ( have_rows('one_bedroom_floor_plans', 'options') ) : the_row();
                        $desc = get_sub_field('description', 'options');
                        $sqft = get_sub_field('square_footage', 'options');
                        $image = get_sub_field('floorplan_image', 'options');
                        $url = get_sub_field('availability_link', 'options'); ?>

                        <div class="floorplan">
                            <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="">
                            <div class="description"><?php echo $desc; ?></div>
                            <div class="sqft"><?php echo $sqft; ?></div>
                            <a href="<?php echo $url; ?>"><button class="availability-link">view all availability &raquo;</button></a>
                        </div><!-- floorplan -->

                    <?php endwhile; ?>
                    </div><!-- one-bedroom-section -->
                <?php endif;

                // check for rows (sub repeater)
                if( have_rows('three_bed') ): ?>

                    <div class="one-bedroom-section">

                    <?php while ( have_rows('one_bedroom_floor_plans', 'options') ) : the_row();
                        $desc = get_sub_field('description', 'options');
                        $sqft = get_sub_field('square_footage', 'options');
                        $image = get_sub_field('floorplan_image', 'options');
                        $url = get_sub_field('availability_link', 'options'); ?>

                        <div class="floorplan">
                            <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="">
                            <div class="description"><?php echo $desc; ?></div>
                            <div class="sqft"><?php echo $sqft; ?></div>
                            <a href="<?php echo $url; ?>"><button class="availability-link">view all availability &raquo;</button></a>
                        </div><!-- floorplan -->

                    <?php endwhile; ?>
                    </div><!-- one-bedroom-section -->
                <?php endif; ?>

            <?php endwhile; // while( has_sub_field('to-do_lists') ): ?>
            </div><!-- floorplans-wrapper -->
        </div><!-- floorplans-section -->
    <?php endif; // floors
}
