meeplog
=======

This is the log implementation used for the meepshop architecture.
it can act as a log harvestor or a log server.

Options:

  -h, --help      output usage information
  -c, --config    path to the json config file 
  -V, --version   output the version number
  -m, --mode      specify in which mode meeplog will be running. tail or server(default)
  -d, --directory used when meeplog is runing in tail mode
  -b, --backend   specify when the log are sent for storage. stdout(default), file, nsq, other plugins 

