function () { 
   var items = google_tag_manager['GTM-XXXXXXX'].dataLayer.get('ecommerce').items;
  
  var itemIds = [];
  
  for(i=0; i<items.length; i++) {
  itemIds.push(items[i].item_id);
  } 
  
  return itemIds;
}