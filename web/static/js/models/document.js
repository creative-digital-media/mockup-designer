usemockups.models.Document = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('documents'),
    defaults: {
        "mockups": []
    },
    initialize: function () {
        this.mockups = new usemockups.collections.Mockups;
        this.mockups.on("add remove persist", this.persist, this);

    },
    persist: function () {
        this.set("mockups", this.mockups.toJSON());
    },
    parse: function (result) {
        if (this.mockups)
            this.mockups.reset(result.mockups);
        return result;
    }
});

usemockups.collections.Documents = Backbone.Collection.extend({
    model: usemockups.models.Document,
    localStorage: new Backbone.LocalStorage('documents')

});