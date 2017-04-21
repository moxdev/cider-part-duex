<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Cider_Mill_Apartments
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">

<?php wp_head(); ?>

<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-93467037-1', 'auto');
 ga('send', 'pageview');

</script>

</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'cider_mill' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="masthead-wrapper">
			<div class="site-branding">

				<a id="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="243" height="67" viewBox="0 0 243 67"><title>Cider Mill Apartments</title><g id="Logo" data-name="Logo"><g id="masthead-logo"><image width="243" height="67" xlink:href="data:image/png;base64,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"/></g></g></svg></a><!-- #logo -->

				<?php if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php else : ?>
					<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
				endif;

				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
				<?php
				endif; ?>
			</div><!-- .site-branding -->
			<nav id="site-navigation" class="main-navigation" role="navigation">

			    <?php $leasing = get_field( 'leasing', 'option' ); ?>
			    <?php if ( $leasing ) : ?>

			    <div class="masthead-phone">
			        <span>Call now to schedule a personal tour: </span><a href="tel:<?php echo $leasing ?>"><?php echo $leasing; ?></a>
			    </div>

			    <?php endif; ?>

				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">

				<?php esc_html_e( 'Menu +', 'cider_mill' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->

		</div><!-- masthead-wrapper -->
		<div class="mobile-menu">
			<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_id' => 'primary-menu' ) ); ?>
		</div>
	</header><!-- #masthead -->



	<div id="content" class="site-content">

		<!-- Displays the Featured Image if it exists -->
		<?php if ( function_exists( 'cider_mill_featured_image' ) ) {
		    cider_mill_featured_image();
		}

		if( is_page_template( 'page-gaithersburg.php' ) && function_exists('mm4_area_map') ) {
			mm4_area_map();
		}

		if( is_page_template( 'page-photo-gallery.php' ) && function_exists('cider_mill_photo_gallery') ) {
			cider_mill_photo_gallery();
		}

		?>

		<div class="content-wrapper">
