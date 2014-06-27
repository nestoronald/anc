<?php
/**
* @package   abana_j25
* @author    arrowthemes http://themeforest.net/user/arrowthemes/portfolio/?ref=arrowthemes
* @copyright Copyright (C) arrowthemes
*/

// get template configuration
include($this['path']->path('layouts:template.config.php'));
?>

<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>">

<head>
<?php echo $this['template']->render('head'); ?>
</head>

<body id="page" class="page <?php echo $this['config']->get('bg_texture'); ?> bg-<?php echo $this['config']->get('bg_tone'); ?>" data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>

	<?php if ($this['modules']->count('absolute')) : ?>
		<div id="absolute">
			<?php echo $this['modules']->render('absolute'); ?>
		</div>
	<?php endif; ?>

	<div class="wrapper grid-block">

		<div id="toolbar" class="grid-block">

				<?php if ($this['modules']->count('toolbar-l') || $this['config']->get('date')) : ?>
				<div class="float-left">

					<?php if ($this['config']->get('date')) : ?>
						<time datetime="<?php echo $this['config']->get('datetime'); ?>"><?php echo $this['config']->get('actual_date'); ?></time>
					<?php endif; ?>

					<?php echo $this['modules']->render('toolbar-l'); ?>

				</div>
				<?php endif; ?>

				<?php if ($this['modules']->count('search')) : ?>
					<div class="float-right search-box">
						<div id="search"><?php echo $this['modules']->render('search'); ?></div>
					</div>
				<?php endif; ?>

				<?php if ($this['modules']->count('toolbar-r')) : ?>
					<div class="float-right"><?php echo $this['modules']->render('toolbar-r'); ?></div>
				<?php endif; ?>

				<!-- social icons -->
				<div class="float-right top-links">

					<?php if ($this['config']->get('behance_link')) : ?>
						<a class="behance" href="http://behance.net/<?php echo $this['config']->get('behance_link'); ?>" target="blank" title="behance"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('deviantart_link')) : ?>
						<a class="deviantart" href="http://<?php echo $this['config']->get('deviantart_link'); ?>.deviantart.com" target="blank" title="deviantart"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('digg_link')) : ?>
						<a class="digg" href="http://digg.com/users/<?php echo $this['config']->get('digg_link'); ?>" target="blank" title="digg"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('dribbble_link')) : ?>
						<a class="dribbble" href="http://dribbble.com/<?php echo $this['config']->get('dribbble_link'); ?>" target="blank" title="dribbble"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('facebook_link')) : ?>
						<a class="facebook" href="http://www.facebook.com/<?php echo $this['config']->get('facebook_link'); ?>" target="blank" title="facebook"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('pinterest_link')) : ?>
						<a class="pinterest" href="http://www.pinterest.com/<?php echo $this['config']->get('pinterest_link'); ?>" target="blank" title="pinterest"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('flickr_link')) : ?>
						<a class="flickr" href="http://www.flickr.com/photos/<?php echo $this['config']->get('flickr_link'); ?>" target="blank" title="flickr"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('forrst_link')) : ?>
						<a class="forrst" href="https://forrst.com/people/<?php echo $this['config']->get('forrst_link'); ?>" target="blank" title="forrst"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('github_link')) : ?>
						<a class="github" href="http://www.github.com/<?php echo $this['config']->get('github_link'); ?>" target="blank" title="github"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('google_link')) : ?>
						<a class="google" href="http://plus.google.com/<?php echo $this['config']->get('google_link'); ?>" target="blank" title="google+"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('linkedin_link')) : ?>
						<a class="linkedin" href="http://www.linkedin.com/<?php echo $this['config']->get('linkedin_link'); ?>" target="blank" title="linked in"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('tumblr_link')) : ?>
						<a class="tumblr" href="http://<?php echo $this['config']->get('tumblr_link'); ?>.tumblr.com" target="blank" title="tumblr"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('twitter_link')) : ?>
						<a class="twitter" href="http://www.twitter.com/<?php echo $this['config']->get('twitter_link'); ?>" target="blank" title="twitter"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('vimeo_link')) : ?>
						<a class="vimeo" href="http://www.vimeo.com/<?php echo $this['config']->get('vimeo_link'); ?>" target="blank" title="vimeo"></a>
					<?php endif; ?>

					<?php if ($this['config']->get('youtube_link')) : ?>
						<a class="youtube" href="http://www.youtube.com/user/<?php echo $this['config']->get('youtube_link'); ?>" target="blank" title="youtube"></a>
					<?php endif; ?>

				</div>
			</div>

		<div class="sheet">
		 <div class="sheet-body">
		 	<header id="header">

				<div id="headerbar" class="grid-block">
					<?php if ($this['modules']->count('logo')) : ?>
					<a href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['modules']->render('logo'); ?></a>
					<?php else : ?>
					<a id="logo" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['modules']->render('logo'); ?>
							<span class="logo-img">
								<?php if ($this['config']->get('show_logo_tag_line')) : ?>
									<span class="tag-line"><?php echo $this['config']->get('logo_tag_line_text'); ?></span>
								<?php endif; ?>
							</span>
					</a>
					<?php endif; ?>

					<?php if($this['modules']->count('headerbar')) : ?>
					<div class="left"><?php echo $this['modules']->render('headerbar'); ?></div>
					<?php endif; ?>
				</div>

			<div id="menubar" class="grid-block">
				<?php  if ($this['modules']->count('menu')) : ?>
				<nav id="menu"><?php echo $this['modules']->render('menu'); ?></nav>
				<?php endif; ?>

				<?php  if ($this['modules']->count('call-us')) : ?>
				<section id="call-us"><?php echo $this['modules']->render('call-us'); ?></section>
				<?php endif; ?>
			</div>

			<?php if ($this['modules']->count('banner')) : ?>
				<div id="banner"><?php echo $this['modules']->render('banner'); ?></div>
			<?php endif; ?>
		</header>

		<?php if ($this['modules']->count('showcase')) : ?>
			<section id="showcase" class="grid-block">
				<div class="header-content">
					<?php echo $this['modules']->render('showcase', array('layout'=>$this['config']->get('showcase'))); ?>
				</div>
			</section>
		<?php endif; ?>

		<?php if ($this['modules']->count('map')) : ?>
		<section id="g-map">
			<?php echo $this['modules']->render('map'); ?>
			<div class="map-shadow"></div>
		</section>
		<?php endif; ?>

		<?php if ($this['modules']->count('slider')) : ?>
		<section id="slide-zone">
			<?php echo $this['modules']->render('slider'); ?>
			<div class="map-shadow"></div>
		</section>
		<?php endif; ?>

		<?php if ($this['modules']->count('breadcrumbs')) : ?>
		<section id="breadcrumbs">
			<a href="<?php echo $this['config']->get('site_url'); ?>" class="home"></a>
			<?php echo $this['modules']->render('breadcrumbs'); ?></section>
		<?php endif; ?>

		<?php if ($this['modules']->count('top-a')) : ?>
			<section id="top-a" class="grid-block"><?php echo $this['modules']->render('top-a', array('layout'=>$this['config']->get('top-a'))); ?></section>
		<?php endif; ?>

		<?php if ($this['modules']->count('top-b')) : ?>
			<section id="top-b" class="grid-block"><?php echo $this['modules']->render('top-b', array('layout'=>$this['config']->get('top-b'))); ?></section>
		<?php endif; ?>

		<?php if ($this['modules']->count('innertop + innerbottom + sidebar-a + sidebar-b') || $this['config']->get('system_output')) : ?>
		<div id="main" class="grid-block">

			<div id="maininner" class="grid-box">
				<?php if ($this['modules']->count('innertop')) : ?>
				<section id="innertop" class="grid-block"><?php echo $this['modules']->render('innertop', array('layout'=>$this['config']->get('innertop'))); ?></section>
				<?php endif; ?>

				<?php if ($this['config']->get('system_output')) : ?>
				<section id="content" class="grid-block"><?php echo $this['template']->render('content'); ?></section>
				<?php endif; ?>

				<?php if ($this['modules']->count('innerbottom')) : ?>
				<section id="innerbottom" class="grid-block"><?php echo $this['modules']->render('innerbottom', array('layout'=>$this['config']->get('innerbottom'))); ?></section>
				<?php endif; ?>
			</div>
			<!-- maininner end -->


			<?php if ($this['modules']->count('sidebar-a')) : ?>
			<aside id="sidebar-a" class="grid-box"><?php echo $this['modules']->render('sidebar-a', array('layout'=>'stack')); ?></aside>
			<?php endif; ?>

			<?php if ($this['modules']->count('sidebar-b')) : ?>
			<aside id="sidebar-b" class="grid-box"><?php echo $this['modules']->render('sidebar-b', array('layout'=>'stack')); ?></aside>
			<?php endif; ?>

		</div>
		<?php endif; ?>
		<!-- main end -->

		<?php if ($this['modules']->count('bottom-a')) : ?>
			<section id="bottom-a" class="grid-block"><?php echo $this['modules']->render('bottom-a', array('layout'=>$this['config']->get('bottom-a'))); ?></section>
		<?php endif; ?>

		<?php if ($this['modules']->count('bottom-b')) : ?>
			<section id="bottom-b" class="grid-block"><?php echo $this['modules']->render('bottom-b', array('layout'=>$this['config']->get('bottom-b'))); ?></section>
		<?php endif; ?>

		<?php if ($this['modules']->count('newsletter')) : ?>
			<section id="newsletter">
				<?php echo $this['modules']->render('newsletter'); ?>
			</section>
		<?php endif; ?>

		<?php if ($this['modules']->count('bottom-c')) : ?>
			<section id="bottom-c" class="grid-block">
				<div class="footer-overlay"></div>
					<div class="footer-body">
						<?php echo $this['modules']->render('bottom-c', array('layout'=>$this['config']->get('bottom-c'))); ?>
					</div>
				<div class="footer-overlay-bottom">
					<div class="overlay-shadow"></div>
						<?php if ($this['config']->get('show_footer_tag_line')) : ?>
							<p><?php echo $this['config']->get('footer_tag_line_text'); ?></p>
						<?php endif; ?>
				</div>
			</section>
		<?php endif; ?>
		</div>
		</div>

		<?php if ($this['modules']->count('footer + debug')) : ?>
			<footer id="footer" class="grid-block">
				<?php
					echo $this['modules']->render('footer');
					echo $this['modules']->render('debug');
				?>
			</footer>
		<?php endif; ?>


		<?php if ($this['config']->get('totop_scroller')) : ?>
		<a id="totop-scroller" href="#page"></a>
		<?php endif; ?>


	<?php if ($this['modules']->count('copyright')) : ?>
		<section id="copyright">
			<?php echo $this['modules']->render('copyright'); ?>
			<?php if ($this['config']->get('warp_branding')) : ?>
				<?php $this->output('warp_branding'); ?>
			<?php endif; ?>
		</section>
	<?php endif; ?>

	<?php if ($this['modules']->count('reveal-a')) : ?>
		<div id="reveal-a" class="reveal-modal">
			<?php echo $this['modules']->render('reveal-a', array('layout'=>'stack')); ?>
			<a class="close-reveal-modal">&#215;</a>
		</div>
	<?php endif; ?>

	<?php if ($this['modules']->count('reveal-b')) : ?>
		<div id="reveal-b" class="reveal-modal">
			<?php echo $this['modules']->render('reveal-b', array('layout'=>'equal')); ?>
			<a class="close-reveal-modal">&#215;</a>
		</div>
	<?php endif; ?>

	<?php if ($this['modules']->count('reveal-c')) : ?>
		<div id="reveal-c" class="reveal-modal">
			<?php echo $this['modules']->render('reveal-c', array('layout'=>'double')); ?>
			<a class="close-reveal-modal">&#215;</a>
		</div>
	<?php endif; ?>

	</div>
	<?php echo $this->render('footer'); ?>

</body>
</html>