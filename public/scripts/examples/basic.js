define([
  'THREE'
], function(THREE) {

  function ExBasic(app) {
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x0099ff });

    this.cube = new THREE.Mesh(geometry, material);

    app.scene.add(this.cube);

    return this;
  }

  ExBasic.prototype.update = function(delta) {
    this.cube.rotation.x += (0.2 * delta);
    this.cube.rotation.y += (0.2 * delta);
  };

  return ExBasic;

});
