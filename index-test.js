casper.test.begin('Mapper', 4, function suite(test) {
    casper.start("index.html", function() {
        test.assertTitle("Mapper", "title is correct");
        this.click('#submit');
        test.assertEquals(this.fetchText('.headerText'), "Search | Find | Love")
        test.assertEquals(this.fetchText('.hThree'), "Search")
    });
    casper.run(function() {
        test.done();
    });
});
