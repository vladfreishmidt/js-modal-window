const modal = $.modal({
  title: 'Hey! Look at the cool Modal!',
  closable: true,
  content: `
    <p>Lorem Ipsum okay</p>
  `,
  width: '700px',
  footerButtons: [
    {
      text: 'Okay', 
      type: 'primary', 
      handler() {
        console.log('Primary btn clicked');
        modal.close()
      }
    },
    {
      text: 'Cancel', 
      type: 'danger', 
      handler() {
        console.log('Danger btn clicked');
        modal.close();
      }
    },
  ],
});
 