# In Queue, it is Downloading Multiple at once instead of one by one

[Source](https://github.com/subhra74/xdm/issues/1047)

### **Describe the bug**
The queue and scheduler is downloading multiple file in XDM [8.0.26](https://github.com/subhra74/xdm/releases/tag/8.0.26) Pre-release version. But it was downloading single file in previous version and this is what I want.

### **To Reproduce**
Steps to reproduce the behavior:
1. Go to 'Queue and Scheduler'
2. Click on 'New' to create new queue
3. Add multiple file to be downloaded on the newly created queue
4. Start the queue
5. It starts downloading multiple files at once. (This is the problem)

### **Expected behavior**
After starting a queue it should download file one by one.

### **Screenshots**
This 4 files are in the same queue


![schreenshot](https://cdn.jsdelivr.net/gh/jashezan/Public-Resources-Holder@main/Github-issues/xdm/xdm-github-issue.png)

### **please complete the following information:**
 - OS: Linux (Kubuntu 22.04)
 - Browser: Firefox 113.0 (64 bit)
 - XDM addon: [XDM Integration Module 1.3](https://addons.mozilla.org/en-US/firefox/addon/xdm-integration-module/)
 - XDM Version [8.0.26](https://github.com/subhra74/xdm/releases/tag/8.0.26)

