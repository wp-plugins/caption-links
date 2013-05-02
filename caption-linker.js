jQuery(document).ready(function(){
    
    var link = '<span class="wp_themeSkin caption-linker"><a role="button" id="content_link" href="#" class="mceButton mce_link mceButtonEnabled caption-link" aria-labelledby="content_link_voice" title="Insert/edit link (Alt + Shift + A)" tabindex="-1" aria-disabled="false" style="float:right"><span class="mceIcon mce_link" style="padding-top:0"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="content_link_voice">Insert/edit link (Alt + Shift + A)</span></a></span>';
    
    jQuery('#attachment_caption').after(link);
    jQuery(document).ajaxComplete(function(){
        jQuery('.caption-linker').remove();
        jQuery('label[data-setting=caption]').append(link);
    });

    jQuery(document).on("click", '.thumbnail', function() {
        jQuery('label[data-setting=caption]').append(link);
    });
    
    jQuery(document).on("click", '.caption-link', function(){
        var url=prompt("URL of link", "http://");
        if (url != null) {
            var text=prompt("Text you would like to display", "Learn More");
        }
        if (url != null && text != null) {
            var box = jQuery(this).parent(".wp_themeSkin").siblings('textarea');
        
            box.val(box.val() + '<a href="' + url + '">' + text + '</a>');
        }
        return false;
    });
});
