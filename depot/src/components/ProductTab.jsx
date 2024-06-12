import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class=" mx-20 my-20">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ALL" {...a11yProps(0)} />
            <Tab label="Home Decor" {...a11yProps(1)} />
            <Tab label="Lighting" {...a11yProps(2)} />
            <Tab label="Decoration" {...a11yProps(3)} />
            <Tab label="Vases" {...a11yProps(4)} />
            <Tab label="Basics" {...a11yProps(5)} />
          
          </Tabs>
        </Box>

        {/* b1 */}
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-4  gap-16 pt-10">

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">BASKET WITH HANDLES</h5>
              <p className="pro-price text-center">$160</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Deco Accessory</h5>
              <p className="pro-price text-center">$15</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Flower Vase</h5>
              <p className="pro-price text-center"> <span>$210</span> $170</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Wall Clock</h5>
              <p className="pro-price text-center">$110</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="grid grid-cols-4  gap-16 pt-10">
            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Wall Clock</h5>
              <p className="pro-price text-center">$110</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Deco Accessory</h5>
              <p className="pro-price text-center">$15</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">BASKET WITH HANDLES</h5>
              <p className="pro-price text-center">$160</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Deco Accessory</h5>
              <p className="pro-price text-center">$15</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Flower Vase</h5>
              <p className="pro-price text-center"> <span>$210</span> $170</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="grid grid-cols-4  gap-16 pt-10">

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Table Lamp</h5>
              <p className="pro-price text-center">$160</p>
              <p className="pro-add text-center">Add To Card</p>

            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="grid grid-cols-4  gap-16 pt-10">

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">BASKET WITH HANDLES</h5>
              <p className="pro-price text-center">$160</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Deco Accessory</h5>
              <p className="pro-price text-center">$15</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Flower Vase</h5>
              <p className="pro-price text-center"> <span>$210</span> $170</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Wall Clock</h5>
              <p className="pro-price text-center">$110</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-4  gap-16 pt-10">

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Table Lamp</h5>
              <p className="pro-price text-center">$160</p>
              <p className="pro-add text-center">Add To Card</p>

            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Pottery Vase</h5>
              <p className="pro-price text-center">$60</p>
              <p className="pro-add text-center">Add To Card</p>

            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div className="grid grid-cols-4  gap-16 pt-10">

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Newspaper Storage</h5>
              <p className="pro-price text-center">$90</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Deco Accessory</h5>
              <p className="pro-price text-center">$15</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>

            <div className="box reletive ">
              <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-768x768.jpg" alt="" />
              <div className="pop absolute bottom-[201px] mx-24 ">
                <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
              </div>
              <h5 className="pro-title text-center">Wall Clock</h5>
              <p className="pro-price text-center">$110</p>
              <p className="pro-add text-center">Add To Card</p>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
