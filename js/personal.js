/*!
 * Cal date
*/


var intern 			= ["2009-06-01","2009-10-30","BCPI"							,"Intern"]
var swMembership 	= ["2007-07-01","2009-12-31","Samsung Software Membership"	, "Member"]
var samsung 		= ["2010-01-25","2015-07-15","Samsung Electronics"			,"Software Engineer"]
var sandisk			= ["2015-10-03","2016-09-30","Sandisk"						,"Senior Software Engineer"]
var intel			= ["2017-05-29","Now"		,"intel"						,"Customer Qulitify Engineer"]

var sandiskProject = {};
sandiskProject['name'] 		= " Venus(client SSD F/W)";
sandiskProject['language'] 	= " C, ARM, RTOS, Python";
sandiskProject['term']		= " From 2015 Oct To 2016 Sep"
sandiskProject['detail'] 	= " Implementation the F/W of feature to Vendors requirements for client SSD.</br> \
                       		Development of the layers that send data between the Host and FTL on the ThreadX.</br> \
                       		Issue analysis and resolution of numerous problems for performance improvements.</br> \
                       		Various testing. Unit/Integration/Acceptance.";
var delphiProject = {};
delphiProject['name']		= " Delphi System(3D NAND first verification)";
delphiProject['language']	= " C, R, ARM, Python";
delphiProject['term']		= " From 2015 Jan To 2015 Jun";
delphiProject['detail']		= " Constructed a test scenario and implement F/W for analyze 3D NAND.<br/> \
							Constructed test cases that run on the chamber and embedded boards.<br/> \
							Developed programs to analyze and visualize the results of huge size of log.";

var autoProject = {};
autoProject['name']			= " Test automation system for SSD, eMMC, UFS";
autoProject['language']		= " Javascipt, jQuery, BootStrap, HTML, CSS, dJango, litesql, C#, WPF";
autoProject['detail_1']		= "Developed a system to automatically install Windows and Test programs of over 1000 PC.</br>\
                            Designed and developed web application for visualizing data of SSD and program for execute Testing.</br>\
                            Developed viewer for current test equipment and developed a program to export Excel files from database tools.";
autoProject['detail_2']		= "Developed program that huge size log parsing to write database and make excel file automatically </br>\
                            Designed and developed web application for visualizing data of SSD.";
autoProject['detail_3']		= "Developed a system that is capable of transmitting a command to group multiple boards in a webpage. </br>\
                            It can be monitored simultaneously about over 700 boards.</br>\
                            Designed and developed web application for test automation system using Python based platform, Django and bootstrap components.";
autoProject['detail_4']		= "Developed a program that automatically checks the latest BIOS version and Driver version of PCs in the lab(over 1000), saves it in DB, and exports it as an Excel file. (Vendor’s all PC model like Dell, Lenovo, HP, Sony, etc )";
autoProject['detail_5']		= "Developed a tool for analyzed the log, stored on the Data Server and viewer that showing analysis of test and products information. It also can issue commands to the board by terminal.";

                           
var ctrlProject = {};
ctrlProject['name']		= " MCX, MDX, MFX (controller of client SSD)";
ctrlProject['language'] = " C, ARM";
ctrlProject['term']		= " From Jan 2010 To Dec 2012";
ctrlProject['detail']	= " Verifying controller basic functionality on SATA-based client SSD. <br/>\
                        Generate guide code for S/W team, how to read/write to NAND, setup and use UART, I2C, GPIO etc.<br/>\
                        I have developed a test framework that can be a hardware unit tests on the FPGA environment.<br/>\
                        Developed a lot of test cases according to SSD specification for improving quality of SSD F/W.<br/>";

var internProject = {};
internProject['name']		= " Company's website";
internProject['language'] 	= " AST.NET, C#, HTML, CSS, Cobol"
internProject['term']		= " From 2009 Jul To 2009 Oct"
internProject['detail']		= "Taking photos and making homepage related to the company. <br/>\
                            Maintain factory programs within the company.";

var secmemProject = {};
secmemProject['name']		= " Various projects"
secmemProject['language']	= "C, C++, C#, WPF, Adobe Flex, Adobe Air, OpenGL, Linux"
secmemProject['term']		= "From 2007 Jul To 2009 Dec"
secmemProject['detail']		= "Image search and movie collection, editing, management program using local and web search.<br />\
                            Developed program provides support for environment, such as 3D desktop in the Linux environment. <br />\
                            Developed USB development emulator(USB Virtual Driver) that allows developers to develop for USB devices without hardware in a Windows environment. <br />\
                            Developed a site for video management and playback, Program for editing videos on the Web without encoding.";

var volunteer1 		= [	"General volunteers, South Korea (2010 - 2014)",
				  		"I regularly meet with pediatric cancer patients and got acquainted with them. I found out the wishes of the child and his family, and then made that wish. I let them experience the job they want, have something they want, or go to the place they want."];
var volunteer2		= [ "Leader volunteers, South Korea (2010 - 2012)",
						"As a leader of volunteer activities, I was planning a participation plan and encouraging people.Regularly visit nursing homes and orphanages, teach violin to children, make sneakers, scarfs and notes for African children, and draw murals."];
var volunteer3		= [ "Mentor (2007 - 2009)",
						"I’ve taught seminars for developers until quite recently, and have helped my university juniors to understand C Language, Data structures, and Linux Kernel Internal. The seminars consisted of the following subjects: Proxy Server, Security Server , and Regular Expressions."];

var volunteers		= [volunteer1, volunteer2, volunteer3]

function deltaMonths(startDate, endDate){

	var FORMAT ='-';
	var termMonthCnt;

	if(endDate == "Now")
	{
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();
		endDate = yyyy+"-"+mm+"-"+dd
	}
	

	var start_dt = startDate.split(FORMAT);
	var end_dt = endDate.split(FORMAT);

	var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
	var to_dt	= new Date(end_dt[0], end_dt[1], end_dt[2]);

	//Same year
	if(start_dt[0] == end_dt[0]){
		termMonthCnt = end_dt[1] - start_dt[1] + 1;
	}
	else{
		termMonthCnt = Math.round((to_dt.getTime() - from_dt.getTime())/(1000*60*60*24*365/12));
	}
	document.write(termMonthCnt);
}

function printDates(KoreanTypeDate)
{
	var FORMAT ='-';
	if(KoreanTypeDate == "Now"){
		document.write("Now");
	}
	else{
	var dt = KoreanTypeDate.split(FORMAT);
	var newdt = new Date(dt[0],dt[1],dt[2])

	document.write(newdt.toDateString().substr(4, 11)); //29 Jan 2009
	}
}
