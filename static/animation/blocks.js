const contentBlocks = document.querySelectorAll('.content_block');
const textBlocks = document.querySelectorAll('.content_block-text');
const imageBlocks = document.querySelectorAll('.content_block-image');
const largeScreen = 992; 

function rearrangeBlocks() {
  for (let i = 0; i < contentBlocks.length; i++) {
    if (i % 2 === 0) {
      contentBlocks[i].insertBefore(textBlocks[i], imageBlocks[i]);
    } else {
      contentBlocks[i].insertBefore(imageBlocks[i], textBlocks[i]);
    }
  }
}

function initialStateBlocks() {
  for (let i = 0; i < contentBlocks.length; i++) {
    contentBlocks[i].insertBefore(textBlocks[i], imageBlocks[i]);
  }
}

function handleViewportChange() {
  if (window.innerWidth > largeScreen) {
    rearrangeBlocks();
  } else {
    initialStateBlocks();
  }
}

window.addEventListener('load', handleViewportChange);
window.addEventListener('resize', handleViewportChange);

gsap.registerPlugin(ScrollTrigger);

const columnsChart1 = Array.from(document.getElementsByClassName('chart1-column'));
const columnsChart2 = Array.from(document.getElementsByClassName('chart2-column'));
const columnsChart3 = Array.from(document.getElementsByClassName('chart3-column'));
const columnsChart4 = Array.from(document.getElementsByClassName('chart4-column'));

function increaseColumns(arrColumns, numberOfChart) {
  arrColumns.forEach((column) => {
    gsap.set(column, { scaleY: 0, transformOrigin: 'bottom' });
    gsap.fromTo(
      column,
      { scaleY: 0 },
      {
        duration: 4,
        scaleY: 1,
        scrollTrigger: {
          trigger: contentBlocks[numberOfChart],
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      },
    );
  });
}

contentBlocks.forEach((block) => {
  gsap.to(block, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: block,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  increaseColumns(columnsChart1, 0);
  increaseColumns(columnsChart2, 1);
  increaseColumns(columnsChart3, 2);
  increaseColumns(columnsChart4, 3);
});

