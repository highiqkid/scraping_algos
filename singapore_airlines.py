from selenium import webdriver
from os.path import join, dirname, abspath
from selenium.webdriver.support.ui import Select
from selenium import webdriver
from selenium.webdriver.support import ui
from selenium.webdriver.common.keys import Keys
from random import randint
import time


driver = webdriver.Chrome()
driver.set_window_size(2000,1090)
driver.get("https://www.singaporeair.com/en_UK/ppsclub-krisflyer/flightsearch/")
driver.execute_script("$('.login').trigger('click');")
driver.execute_script("$('#membership-1').val('8818722849');")
driver.execute_script("$('#membership-2').val('123456');")
driver.execute_script("$('#submit-1').trigger('click');")
driver.execute_script("$('.menu__item a')[1].click();")
driver.execute_script("$('#travel-radio-2').click();")

driver.execute_script("document.getElementsByName('destinationDropDown')[1].click();  var key; for (var i = 0; i < window.dataLayer.length; i++) {if (window.dataLayer[i]['gtm.elementId'] == 'city1-2') {key = i; break;}} window.dataLayer[key]['gtm.element'].value = 'Hong Kong, Hong Kong (Hong Kong - HKG)';")

driver.find_element_by_id("city1-2").send_keys(Keys.ENTER)

time.sleep(0.3)

driver.execute_script("$('#city1-travel-start-day').val('30/03/2016');")
driver.execute_script("$('#city1-travel-return-day').val('4/04/2016');")
time.sleep(3)
driver.execute_script("$('#city-travel-input-2').click();")
#document.getElementsByName("destinationDropDown")[1].click();
#var key;
#for (var i = 0; i < window.dataLayer.length; i++) {
 #   if (window.dataLayer[i]["gtm.elementId"] == "city1-2") {
 #       key = i;
  #  	break;
   # }

#}
#window.dataLayer[key]["gtm.element"].value = "Hong Kong, Hong Kong (Hong Kong - HKG)";

#hidden-mb package-1    this is the class name for identifying the text.
