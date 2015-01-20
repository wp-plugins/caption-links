// jQuery function to add insertAtCaret
jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  });
}
});
jQuery(document).ready(function(){
    // The link to add
    
    var link = '<div class="caption-link" tabindex="-1" role="button" aria-label="Insert link"><button type="button">Insert Link</button></div>';
    
    // Add link to media edit page
    jQuery('#attachment_caption').after(link);
    
    // Add caption when thumbnail selected, removing any that may already be around
    jQuery(document).ajaxComplete(function(){
        jQuery('.caption-link').remove();
        jQuery('label[data-setting=caption]').append(link);
    });

    // Add caption when thumbnail selected
    jQuery(document).on("click", '.thumbnail', function() {
        jQuery('label[data-setting=caption]').append(link);
    });
    
    //
    jQuery(document).on("click", '.caption-link button', function(){
        var url=prompt("URL of link", "http://");
        if (url != null) {
            var text=prompt("Text you would like to display", "Learn More");
        }
        if (url != null && text != null) {
            var box = jQuery(this).parent().siblings('textarea');
        
            box.insertAtCaret('<a href="' + url + '">' + text + '</a>');
        }
        return false;
    });
});
