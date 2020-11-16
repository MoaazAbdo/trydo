import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './TabsSection.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

function TabsSection() {
    return (
        <>
        <section id="tabs">

           
            
            <Tabs>
  
                <TabPanel>
                
                  <h2>

                    <div className="test-start">
                        <FaQuoteLeft />
                    </div>

                    Aklima The standard chunk of Lorem 
                    Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.

                    <div className="test-end">
                        <FaQuoteRight /> 
                    </div>

                  </h2>
                  <p> <span>AKLIMA </span> - COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
              <TabPanel>
                  <h2>

                    <div className="test-start">
                        <FaQuoteLeft />
                    </div>
                    Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                    <div className="test-end">
                        <FaQuoteRight /> 
                    </div>

                    </h2>
                  <p> <span>FATIMA ASRAFY </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
              <TabPanel>
                  <h2>
                        <div className="test-start">
                        <FaQuoteLeft />
                        </div>
                        Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                        <div className="test-end">
                        <FaQuoteRight /> 
                        </div>
                    </h2>
                    <p> <span>AKLIMA </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
              <TabPanel>
                    <h2>
                        <div className="test-start">
                        <FaQuoteLeft />
                        </div>
                        Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                        <div className="test-end">
                        <FaQuoteRight /> 
                        </div>
                    </h2>
                    <p> <span>JOHNS DUE </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
  
              <TabPanel>
                  <h2>

                        <div className="test-start">
                        <FaQuoteLeft />
                        </div>

                        John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                        <div className="test-end">
                        <FaQuoteRight /> 
                        </div>
                    </h2>
                    <p> <span>JOHN DOE </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
              <TabPanel>
                <h2>
                    <div className="test-start">
                    <FaQuoteLeft />
                    </div>

                    Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                    <div className="test-end">
                    <FaQuoteRight /> 
                    </div>
                </h2>
                <p> <span>AMAR ORTHI </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
  
              <TabPanel>
                  <h2>
                    <div className="test-start">
                    <FaQuoteLeft />
                    </div>  

                    Aklima The standard chunk of Lorem 
                    Ipsum used since the 1500s is reproduced below for those interested.
                    <div className="test-end">
                    <FaQuoteRight /> 
                    </div>
                  </h2>
                  <p> <span>AKLIMA </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>
              <TabPanel>
                <h2>
                    <div className="test-start">
                    <FaQuoteLeft />
                    </div>  
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                    <div className="test-end">
                    <FaQuoteRight /> 
                    </div>
                </h2>
                <p> <span>FATIMA MA </span>- COO, AMERIMAR ENTERPRISES, INC.</p>
              </TabPanel>

        
              <TabList>
                  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-1.jpg"} alt="img" className="image"/>
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-2.jpg"} alt="img" className="image" />
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-3.jpg"} alt="img" className="image" />
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-4.jpg"} alt="img" className="image" />
                  </Tab>
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-5.jpg"} alt="img" className="image" />
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-6.jpg"} alt="img" className="image" />
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-7.jpg"} alt="img" className="image" />
                  </Tab>
  
                  <Tab>
                      <img src={process.env.PUBLIC_URL + "/images/testimonial-8.jpg"} alt="img" className="image" />
                  </Tab>
                  
                  
              </TabList>

          </Tabs>
        </section>
        </>
    )
}

export default TabsSection
