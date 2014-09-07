// from http://stackoverflow.com/a/2419877/2449940
jQuery.fn.outerHTML = function(s) {
	return s
		? this.before(s).remove()
		: jQuery("<p>").append(this.eq(0).clone()).html();
};

try{
	if(new window.ActiveXObject("Microsoft.XMLHTTP")){
		window.location = "http://chrome.com";
	}
}catch(e){
	console.log("Thanks for not using Internet Explorer!");
}

// THIS IS AS CLOSE TO DYNAMIC AS WE CAN GET
window.Site = (function(){
	// from http://davidwalsh.name/vendor-prefix
	var s = window.getComputedStyle(document.documentElement, '');
	var prefix = (Array.prototype.slice
		.call(s)
		.join('') 
		.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
	)[1];
	var scrollLast = 0;
	// improve query times
	$toolbar = $('.toolbar');
	$sidebar = $('.sidebar');
	$footer = $('.footer');
	// god damn robots
	var emCoded = 'bWVAdGpob3JuZXIuY29t';
	var ballmeripsum = "Developers developers developers developers developers developers developers developers developers developers developers programming Whoo! winning powerpoint presentation bing. Windows Whoo! outlook hotmail i have never honestly thrown a chair in my life. Google is not a real company linux is a cancer programming windows. Winning i have never honestly thrown a chair in my life hotmail there's no chance that the iPhone is going to get any significant market share microsoft word i don't know what a monopoly is DEVELOPERS Whoo!. Leadership linux is not in the public domain windows will be everywhere Whoo! google is not a real company there's no chance that the iPhone is going to get any significant market share.";
	var number1 = Math.floor(Math.random()*10+1);
	var number2 = Math.floor(Math.random()*20+1);

	var ProveHuman = function(){
		var answer = prompt("Quick human check! What's "+number1+" + "+number2+"?");
		if(answer === (number1+number2).toString()){
			prompt("Hello there, human! Here's my email.", atob(emCoded));
		}else{
			if(answer !== null)
				Site.ProveHuman();
		}
	}

	var Site = {
		Templates: {
			// mustache.js templates
			Block: (function(){
				$el = $(document.createElement('div'));
				$el.addClass('block')
					.attr('id', '{{id}}')
					.attr('style', 'background: {{background}}')
					.append('<h1><i class="fa fa-{{icon}}"></i> {{{title}}}</h1>')
					.append('<div class="{{extraClasses}} block-content">{{{content}}}</div>');
				return $el[0].outerHTML;
			}()),

			ContactIcon: (function(){
				$el = $(document.createElement('a'));
				$el.append('<i title="{{title}}" class="fa fa-{{icon}}"></i>')
					.attr('href', '{{href}}');
				return $el[0].outerHTML;
			}()),

			SidebarIcon: (function(){
				$el = $(document.createElement('div'));
				$el.append('<i class="fa fa-{{icon}}"></i>')
					.attr('data-icon-for', '{{id}}')
					.attr('data-active-color', '{{background}}')
					.attr('title', '{{title}}')
					.addClass('sidebar-icon');
				return $el[0].outerHTML;
			}()),

			Project: (function(){
				$el = $(document.createElement('div'));
				$el.addClass('project')
					.attr('style', 'background-image: url({{image}})')
					.attr('id', 'project-{{id}}')
					.append('<h1 class="projectTitle"><a href="{{url}}">{{{name}}}</a></h1>{{{description}}}');
				return $el[0].outerHTML;
			}())
		},

		// no sass, no problem
		Prefixify: function(styleToPrefix){
			return "-"+prefix+"-"+styleToPrefix;
		}
	};

	var templates = Site.Templates;

	var blocks = [
		{
			title: "Welcome",
			icon: "user",
			content: (function(){
				$div = $('<div></div>');
				$div.html("<h1>Hi, I'm <span id=\"name-fill\">TJ</span>.</h1><h3>Here's some stuff I do.</h3>")
					.addClass('center fill animated fadeInDown');
				return $div[0].outerHTML;
			}()),
			id: "welcome",
		},
		{
			title: "About Me",
			icon: "info-circle",
			content: '<span class="indent"></span>Hey there! I\'m TJ Horner, known as <a href="https://www.google.com/search?q=geekygamer14">GeekyGamer14</a> on the internet. My hobbies include programming, <a href="http://soundcloud.com/geekygamer14">making music</a>, <a href="https://www.youtube.com/watch?v=QmeuSA3tr8I">playing around with my Launchpad</a>, and <a href="http://github.com/GeekyGamer14/magic">creating random and useless scripts</a> when I\'m bored. I also do some serious work such as creating 99% of <a href="http://iquestria.net">iQuestria</a> (which is quite fun actually). I have experience in HTML, Python, PHP, Ruby, JavaScript, CSS, Java, C++, and C#. As you could probably already tell, I <i>love</i> web development. Front-end and back-end.<br/><h2>What inspired me to code?</h2>See <a href="http://github.com/geekygamer14/geekygamer14.github.io/blob/master/what-inspired-me.md">what-inspired-me.md</a>',
			id: "aboutme"
		},
		{
			title: "Projects",
			icon: "code",
			content: (function(){
				$el = $('<div class="projects"></div>');
				projects = [
					{
						name: "Collaborative Launchpad (always down)",
						url: "http://home.tjhorner.com:3000",
						description: "Control my Novation Launchpad over the internet. Uses Node.js for MIDI interface, express.js for the server and Socket.io for WebSocket stuff. Yes, this all happens on my real Launchpad. It also wakes me up in the middle of the night.",
						image: "img/launchpad.png",
						id: "launchpad"
					},
					{
						name: "iQuestria",
						url: "http://iquestria.net",
						description: "I'll let you figure this one out.",
						image: "http://datastorage.iquestria.net/logos/1024.png",
						id: "iquestria"
					},
					{
						name: "Chattr",
						url: "http://chattrapp.net",
						description: 'Idea originally by <a href="http://syrexide.com">Syrexide</a>. An open source chat client that you can hack to your needs.',
						image: "http://www.syrexide.com/img/chattr.png",
						id: "chattr"
					}
				];
				$.each(projects, function(o,i){
					$el.append(Mustache.render(templates.Project, i));
				});

				return $el[0].outerHTML;
			}()),
			id: "projects",
			extraClasses: "wow rollIn"
		},
		{
			title: "Music",
			icon: "music",
			content: 'I have a passion for music, but have no time to learn how to make music. I sometimes mess around with FL Studio to see what sounds cool and mess around with Performance Mode + Launchpad. Here\'s my favorite SoundClown playlist:<br><br><div class="soundcloud-art"><div class="soundcloud paused"></div></div><iframe id="soundcloud-widget" width="0" height="0" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/41714142&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
			id: "music",
			extraClasses: "wow slideInLeft"
		}
	];

	$.each(blocks, function(o,i){
		var color = Please.make_color();
		if(o === 0)
			$('body').css('background', color);
		i.background = color;
		$icon = $(Mustache.render(templates.SidebarIcon, i));
		$icon.click(function(){
			window.location = "#"+i.id;
		})
			.css('background', color);
		$('.sidebar').append($icon);
		$('.content').append(Mustache.render(templates.Block, i));
	});

	var contacts = [
		{
			title: "GitHub",
			icon: "github",
			href: "https://github.com/geekygamer14"
		},
		{
			title: "Email",
			icon: "envelope",
			href: "#",
			listener: ProveHuman
		},
		{
			title: "Steam",
			icon: "steam",
			href: "http://steamcommunity.com/id/geekygamer14"
		},
		{
			title: "Google+",
			icon: "google-plus",
			href: "http://google.com/+TJHorner"
		},
		{
			title: "Facebook",
			icon: "facebook",
			href: "http://facebook.com/geekygamer14"
		},
		{
			title: "Skype",
			icon: "skype",
			href: "skype:tj.a.horner"
		}
	]

	$.each(contacts, function(o,i){
		$el = $(Mustache.render(templates.ContactIcon, i));
		if(i.listener){
			$el.click(i.listener);
		}
		$('.toolbar').append($el);
		$el.after(' ');
	});

	$(document).scroll(function(){
		if(scrollLast < window.scrollY){
			$toolbar.addClass('hidden');
			$footer.addClass('hidden');
			$sidebar.addClass('toolbar-hidden');
		}else{
			$toolbar.removeClass('hidden');
			$footer.removeClass('hidden');
			$sidebar.removeClass('toolbar-hidden');
		}
		scrollLast = window.scrollY;
	});

	$(document).ready(function(){
		$('body').removeClass('preload');
	});

	new WOW().init();

	konamiEgg = new Konami();
	konamiEgg.code = function(){
		$('.content').fadeOut(function(){
			$gaben = $('<iframe></iframe>').attr('src', 'http://iquestria.net/gaben')
											.attr('frameborder', '0')
											.css('width', '100%')
											.css('height', '100%')
											.addClass('animated fadeIn');
			$('body').append($gaben);
		});
		$footer.addClass('animated fadeOutDownBig');
		$toolbar.addClass('animated fadeOutUpBig');
		$sidebar.addClass('animated fadeOutLeftBig');
	};
	konamiEgg.load();
	
	var widget = SC.Widget('soundcloud-widget');
	widget.bind(SC.Widget.Events.READY, function(){
		widget.getCurrentSound(function(s){
			$('.soundcloud-art').css('background-image', 'url('+s.artwork_url+')');
		});
	});

	return Site;
}());
