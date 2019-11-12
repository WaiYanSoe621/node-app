const exampleCtrl = {
  getExample: (req, res) => {
    res.json({
      success: true,
      msg: 'Example request successed',
    });
  },
  saveExample: (req, res)=> {

  }
}

module.exports = exampleCtrl;