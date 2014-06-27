<?php
/**
* @title		sequence js module
* @version		0.4 beta
* @website		http://www.arrowthemes.com
* @copyright	Copyright (C) 2012 arrowthemes.com. All rights reserved.
*/

defined('_JEXEC') or die('Restricted access');

$document = JFactory::getDocument();
$button_color = $params->get("button_style","true");
?>
<!--  	<div class="prev"></div>	<div class="next"></div> -->
				
		

		<div id="sequence" style="height: <?php echo $params->get("sl_height","500")?>px">
		<ul>
			<!-- slide 1 -->
			<?php if($params->get("show_slide_1","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_1","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_1","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_1","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_1","#")?>" ><?php echo $params->get("button_text_1","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_1","")?>" alt="slide_1" />
			</li>
			<?php endif;?>

			<!-- slide 2 -->
			<?php if($params->get("show_slide_2","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_2","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_2","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_2","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_2","#")?>" ><?php echo $params->get("button_text_2","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_2","")?>" alt="slide_2" />
			</li>
			<?php endif;?>

			<!-- slide 3 -->
			<?php if($params->get("show_slide_3","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_3","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_3","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_3","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_3","#")?>" ><?php echo $params->get("button_text_3","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_3","")?>" alt="slide_3" />
			</li>
			<?php endif;?>

			<!-- slide 4 -->
			<?php if($params->get("show_slide_4","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_4","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_4","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_4","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_4","#")?>" ><?php echo $params->get("button_text_4","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_4","")?>" alt="slide_4" />
			</li>
			<?php endif;?>

			<!-- slide 5 -->
			<?php if($params->get("show_slide_5","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_5","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_5","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_5","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_5","#")?>" ><?php echo $params->get("button_text_5","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_5","")?>" alt="slide_5" />
			</li>
			<?php endif;?>

			<!-- slide 6 -->
			<?php if($params->get("show_slide_6","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_6","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_6","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_6","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_6","#")?>" ><?php echo $params->get("button_text_6","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_6","")?>" alt="slide_6" />
			</li>
			<?php endif;?>

			<!-- slide 7 -->
			<?php if($params->get("show_slide_7","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_7","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_7","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_7","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_7","#")?>" ><?php echo $params->get("button_text_7","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_7","")?>" alt="slide_7" />
			</li>
			<?php endif;?>

			<!-- slide 8 -->
			<?php if($params->get("show_slide_8","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_8","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_8","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_8","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_8","#")?>" ><?php echo $params->get("button_text_8","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_8","")?>" alt="slide_8" />
			</li>
			<?php endif;?>

			<!-- slide 9 -->
			<?php if($params->get("show_slide_9","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_9","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_9","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_9","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_9","#")?>" ><?php echo $params->get("button_text_9","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_9","")?>" alt="slide_9" />
			</li>
			<?php endif;?>

			<!-- slide 10 -->
			<?php if($params->get("show_slide_10","") == "true"):?>
			<li>
				<h2 class="title"><?php echo $params->get("title_10","")?></h2>
				<span class="subtitle"><?php echo $params->get("sub_title_10","")?><br class="clear"/>
				<a class="<?php if($params->get("button_style_10","true") == "true"):?>button-action<?php else:?>button-action button-color<?php endif;?>" href="<?php echo $params->get("button_url_10","#")?>" ><?php echo $params->get("button_text_10","")?></a>
				</span>
				<img class="slide-image" src="<?php echo $params->get("image_url_10","")?>" alt="slide_10" />
			</li>
			<?php endif;?>
		</ul>
		</div>

		<!--navigation bullets-->

		<ul id="slide-nav">
			<?php if($params->get("show_slide_1","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_2","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_3","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_4","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_5","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_6","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_7","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_8","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_9","") == "true"):?><li></li><?php endif;?>
			<?php if($params->get("show_slide_10","") == "true"):?><li></li><?php endif;?>
		</ul>

		<!-- end sequence markup -->

<script type="text/javascript">
(function($){
	$(document).on('ready', function() {

			var options = {
				autoPlay: <?php echo $params->get("autoPlay","true")?>,
				pauseOnHover: <?php echo $params->get("pauseOnHover","true")?>,
				preloader: <?php echo $params->get("preloader","true")?>,
				startingFrameID: <?php echo $params->get("startingFrameID","1")?>,
				prependNextButton: <?php echo $params->get("prependNextButton","false")?>,
				prependPrevButton: <?php echo $params->get("prependPrevButton","false")?>,
				animateStartingFrameIn: <?php echo $params->get("animateStartingFrameIn","true")?>,
				touchEnabled: <?php echo $params->get("touchEnabled","false")?>,
				keysNavigate: <?php echo $params->get("keysNavigate","true")?>,
				cycle: <?php echo $params->get("cycle","true")?>,
				autoPlayDelay: <?php echo $params->get("autoPlayDelay","5000")?>,
				afterPreload: function(){
					$("#slide-nav").fadeIn(300);
					$("#slide-nav li:nth-child("+(sequence.settings.startingFrameID)+")").addClass("active");
				},
				beforeNextFrameAnimatesIn: function(){
					$("#slide-nav li:not(:nth-child("+(sequence.nextFrameID)+"))").removeClass("active");
					$("#slide-nav li:nth-child("+(sequence.nextFrameID)+")").addClass("active");
				}
			};

			var sequence = $("#sequence").sequence(options).data("sequence");
			
			$("#slide-nav li").click(function(){
				if(!sequence.active){
					$(this).children("img").removeClass("active").children("img").addClass("active");
					sequence.nextFrameID = $(this).index()+1;
					sequence.goTo(sequence.nextFrameID);
				}
			});

			$("#slide-nav li:last-child").addClass("last");
		});

	})(jQuery);

</script>