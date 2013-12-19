require([

  'jquery',
  'THREE',

  'examples/basic'

], function($, THREE, ExBasic) {

  // TODO: add documentation to basic scene setup.
  function App() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // TODO: update renderer size on window resize
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // TODO: update camera ratio on window resize
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.scene.add(this.camera);

    $('#canvas').append(this.renderer.domElement);

    this.loadExample();
    this.render();
  }

  // TODO: drive module loading on menu selection.
  App.prototype.loadExample = function() {
    this.example = new ExBasic(this);
  };

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
    window.app = new App();
  });

});
