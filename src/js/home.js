ko.bindingHandlers.chosen = {
  init: function(element) {
    var optionsReturnValue = ko.bindingHandlers.options.init(element);
    
    $(element).chosen({
      disable_search_threshold: 10,
      placeholder_text_single: 'Any'
    });

    return optionsReturnValue;
  },
  update: function(element, valueAccessor, allBindings) {
    ko.bindingHandlers.options.update(element, valueAccessor, allBindings);

    var currentValue = ko.unwrap(allBindings.get("value"));
    var selectedOption = element.querySelector("[value=" + currentValue + "]");
    if (selectedOption) {
      selectedOption.setAttribute("selected", "selected");
    }
    
    $(element).trigger('chosen:updated');
  }
};

var HomeViewModel = function(){
    const USER_TAB_NAME = "userBrowseTab";
    const ORG_TAB_NAME = "orgBrowseTab";
    var self = this;
    
    self.selected = ko.observable(USER_TAB_NAME);
    
    self.pledgeOptions = ko.observableArray(["Iron","Bronze","Silver","Gold","Sapphire","Ruby","Emerald","Diamond","Kyrium"]);
    
    self.showUserTab = function(){
        self.selected(USER_TAB_NAME);
    }
    
    self.showOrgTab = function(){
        self.selected(ORG_TAB_NAME);
    }
    
    var newUsers = [
        {
            user: "SPACEGUY_123",
            createdDate: "Apr. 3, 2017"
        },
        {
            user: "NEWGUY_YEAH",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Real_Yamamushi",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Darth Maul 2.0",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "NEWGUY_YEAH",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Real_Yamamushi",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Darth Maul 2.0",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "NEWGUY_YEAH",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Real_Yamamushi",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Darth Maul 2.0",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "NEWGUY_YEAH",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Real_Yamamushi",
            createdDate: "Apr. 2, 2017"
        },
        {
            user: "Darth Maul 2.0",
            createdDate: "Apr. 2, 2017"
        }
    ];
    
    self.newUsers = ko.observableArray(newUsers);
    
    self.orgBrowse = ko.observable("");
    
    self.createdDateFrom = ko.observable("");
    self.createdDateTo = ko.observable("");
    
    self.joinedDateFrom = ko.observable("");
    self.joinedDateTo = ko.observable("");
    
    self.orgDescription = ko.observable("");
    
    self.parentOrg = ko.observable("");
    
    self.numUsersFrom = ko.observable();
    self.numUsersTo = ko.observable();
    
    self.orgCreatedDateFrom = ko.observable("");
    self.orgCreatedDateTo = ko.observable("");
}

ko.applyBindings(new HomeViewModel());