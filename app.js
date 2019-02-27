var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItemes: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }


})();


var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function() {
            return{
             type : document.querySelector(DOMstrings.inputType).value,
             description : document.querySelector(DOMstrings.inputDescription).value,
             value : document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

var controller = (function(BudgetCtrl, UIctrl) {

    var setupEventListener = function(){

        var DOM = UIctrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    }

    

    var ctrlAddItem = function() {
        
        // 1. get the input Data
        var input = UIctrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI
    };

    return {
        init: function() {
            console.log('App has Started!');
            setupEventListener();
        }
    };
   
})(budgetController, UIController);

controller.init();