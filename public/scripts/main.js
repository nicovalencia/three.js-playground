require([

  'jquery',
  'THREE'

], function($, THREE) {

  // TODO: add documentation to basic scene setup.
  function App(Example) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // TODO: update renderer size on window resize
    this.renderer.setSize(window.innerWidth * 0.7, window.innerHeight);

    // TODO: update camera ratio on window resize
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.7 / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.scene.add(this.camera);

    $('#canvas').append(this.renderer.domElement);

    this.example = new Example(this);

    this.render();
  }

  App.prototype.render = function() {
    var _this = this;
    var delta = this.clock.getDelta();

    this.example.update(delta);
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(function() {
      _this.render();
    });
  };

  $(document).ready(function() {
    var example = window.location.pathname.slice(1);
    if (example) {
      require(['examples/'+example], function(Example) {
        window.app = new App(Example);
        $('ul.menu').fadeOut(function() {
          $('.backToMenu, #sidebar article.'+example).fadeIn();
        });
      });
    }
  });

});
