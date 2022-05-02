

// variables for setup

let container;
let camera;
let scene;
let laptop;
let controls;
let spotLight;
let renderer;

function init() {
    container = document.querySelector('.globe-earth');

    // Create scene (Surrounding)
    scene = new THREE.Scene();
    scene.background = new Three.Color(0xffffff);

    const fov = 28;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 20;
    const far = 1000000;


    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.rotation.y = 45 / 180 * Math.PI;
    //position argument x,y,g 
    camera.position.set(200, 5000, 20000);

    // Hemi Light
    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x0880828, 8)
    scene.add(hemiLight);
    // Renderer
    renderer = new THREE.WebGLRenderer({ anitialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // coontrols
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    camera.position.set(200, 4000, 20000);
    controls.update();

    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./model/earth/untitled.gltf', function (gltf) {
        scene.add(gltf.scene);
        laptop = gltf.scene.children[0];
        animate();
    });

}

function animate() {
    requestAnimationFrame(animate);
    laptop.rotation.y += 0.004;
    controls.update();
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight)
}

window.addEventListener('resize', onWindowResize)
