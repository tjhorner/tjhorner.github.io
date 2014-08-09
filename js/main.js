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


window.Site = (function(){
	// from http://davidwalsh.name/vendor-prefix
	var scrollLast = 0;
	// improve query times
	$toolbar = $('.toolbar');
	$sidebar = $('.sidebar');
	$footer = $('.footer');
	var s = window.getComputedStyle(document.documentElement, '');
	var prefix = (Array.prototype.slice
		.call(s)
		.join('') 
		.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
	)[1];
	// god damn robots
	var emCoded = 'Z2Vla3lnYW1lcjE0QGlxdWVzdHJpYS5uZXQ=';
	var ballmeripsum = "Developers developers developers developers developers developers developers developers developers developers developers programming Whoo! winning powerpoint presentation bing. Windows Whoo! outlook hotmail i have never honestly thrown a chair in my life. Google is not a real company linux is a cancer programming windows. Winning i have never honestly thrown a chair in my life hotmail there's no chance that the iPhone is going to get any significant market share microsoft word i don't know what a monopoly is DEVELOPERS Whoo!. Leadership linux is not in the public domain windows will be everywhere Whoo! google is not a real company there's no chance that the iPhone is going to get any significant market share.";
	var number1 = Math.floor(Math.random()*10+1);
	var number2 = Math.floor(Math.random()*20+1);
	var names = ["a programmer", "GeekyGamer14"];

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
					.append('<div class="block-content">{{{content}}}</div>');
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
					.attr('title', '{{title}}');
				return $el[0].outerHTML;
			}())
		},

		// no sass, no problem
		Prefixify: function(styleToPrefix){
			return "-"+prefix+"-"+styleToPrefix;
		}
	};

	var blocks = [
		{
			title: "Welcome",
			icon: "user",
			content: (function(){
				$div = $('<div></div>');
				$div.html("<h1>Hi, I'm <span id=\"name-fill\">TJ</span>.</h1><h3>Here's some stuff I do.</h3>")
					.addClass('center fill');
				return $div[0].outerHTML;
			}()),
			id: "about"
		},
		{
			title: "Projects",
			icon: "code",
			content: ballmeripsum,
			id: "projects"
		},
		{
			title: "Something",
			icon: "bomb",
			content: ballmeripsum,
			id: "something"
		}
	];

	$.each(blocks, function(o,i){
		var color = Please.make_color();
		if(o === 0)
			$('body').css('background', color);
		i.background = color;
		$icon = $(Mustache.render(Site.Templates.SidebarIcon, i));
		$icon.click(function(){
			window.location = "#"+i.id;
		})
			.css('background', color);
		$('.sidebar').append($icon);
		$('.content').append(Mustache.render(Site.Templates.Block, i));
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
		$el = $(Mustache.render(Site.Templates.ContactIcon, i));
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

	return Site;
}());