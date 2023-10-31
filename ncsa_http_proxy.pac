function FindProxyForURL(url, host) {

    //  SSH bastion forwards
    //    ssh -D 8080 cerberus{1-4}.ncsa.illinois.edu
    //    ssh -D 8081 ache-bastion-{1-2}.ncsa.illinois.edu
    //    ssh -D 8082 bastion{1-2}.security.ncsa.illinois.edu
    //    ssh -D 8083 mg-adm01.internal.ncsa.edu
    //    ssh -D 8084 140.252.32.143   ## LSST TUCSON BASTION
    //    ssh -D 8085 unused
    //    ssh -D 8086 unused
    //    ssh -D 8087 acer.ncsa.illinois.edu ## VSPHERE ISCSI SUBNET ACCESS
    //    ssh -D 8088 hli-adm01.internal.ncsa.edu  ## HOLLI INTERNAL SUBNETS ACCESS
    //    ssh -D 8089 mforgehn1  ## MFORGE GREEN & RED TUNNEL SUBNETS ACCESS


    // Cerberus
    var cerberus_bastion_proxy = "SOCKS 127.0.0.1:8080";

    if ( host == "vsphere.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;

    var cerberus_bastion_subnets = [
        {
            "name": "vsphere mgmt net esxi storage ipmi",
            "start": "10.142.192.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "delta vsphere mgmt net esxi",
            "start": "172.28.39.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "nebula iDRAC",
            "start": "10.142.208.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "lsst ncsa 3003 mgmt net esxi storage ipmi",
            "start": "10.142.237.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "lsst npcf vsphere mgmt net",
            "start": "172.24.16.1",
            "netmask": "255.255.255.0"
        },
        {       
            "name": "Admin Delta VM Network 550",
            "start": "172.28.16.65",
            "netmask": "255.255.255.254"
        },
        {       
            "name": "ASD Provisioning Network 916",
            "start": "172.28.18.0",
            "netmask": "255.255.255.0"
        },
        {
            "name": "ASD VM Private Network 917",
            "start": "172.28.20.0",
            "netmask": "255.255.254.0"
        },
        {
            "name": "lsst laserena aa net",
            "start": "139.229.126.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "ncsa netdot",
            "start": "141.142.141.136",
            "netmask": "255.255.255.255"
        },
       {
            "name": "ncsa netbox",
            "start": "141.142.141.200",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa netdot-proxy ipam",
            "start": "141.142.141.131",
            "netmask": "255.255.255.255"
        },
        {
            "name": "lsst-nts-k8s.ncsa.illinois.edu",
            "start": "141.142.238.233",
            "netmask": "255.255.255.255"
        },
        {
            "name": "lsst in npcf",
            "start": "141.142.180.1",
            "netmask": "255.255.254.0"
        },
        {
            "name": "odcim.ncsa.illinois.edu",
            "start": "141.142.151.10",
            "netmask": "255.255.255.255"
        },
        {       
            "name": "magnus rstudio server",
            "start": "141.142.161.134",
            "netmask": "255.255.255.255"
        },
        {       
            "name": "magnus rstudio connect",
            "start": "141.142.161.135",
            "netmask": "255.255.255.255"
        },
        {
            "name": "magnus rstudio server test",
            "start": "141.142.161.136",
            "netmask": "255.255.255.255"
        },
        {
            "name": "magnus rstudio connect test",
            "start": "141.142.161.137",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa httpproxy",
            "start": "141.142.192.39",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa cotton",
            "start": "141.142.193.114",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa crashplan",
            "start": "141.142.192.209",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa mylar",
            "start": "141.142.193.1",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa paper",
            "start": "141.142.192.135",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa papyrus",
            "start": "141.142.193.88",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa parchment",
            "start": "141.142.192.59",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa tyvek",
            "start": "141.142.192.232",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa vellum",
            "start": "141.142.192.189",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa bluewaters-test",
            "start": "141.142.192.158",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa web-test",
            "start": "141.142.192.136",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa proxy02",
            "start": "141.142.193.136",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsatest",
            "start": "141.142.193.89",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa internal",
            "start": "141.142.192.200",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa internal-test",
            "start": "141.142.192.137",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa internal-dev",
            "start": "141.142.193.200",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa avl-test",
            "start": "141.142.192.134",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa campuscluster-test",
            "start": "141.142.192.168",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa edream-test",
            "start": "141.142.193.98",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa rockosocko",
            "start": "141.142.192.206",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa its-foreman",
            "start": "141.142.192.234",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa its-repo",
            "start": "141.142.192.155",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa repo",
            "start": "141.142.192.125",
            "netmask": "255.255.255.255"
        },
        {
            "name": "repo.security mirrors.security",
            "start": "141.142.171.11",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa identity",
            "start": "141.142.193.68",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa events",
            "start": "141.142.192.92",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa-cmdb.ncsa.illinois.edu",
            "start": "141.142.192.26",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa-cmdb-test.ncsa.illinois.edu",
            "start": "141.142.192.113",
            "netmask": "255.255.255.255"
        },
        {
            "name": "cmdb.ncsa.illinois.edu",
            "start": "141.142.192.133",
            "netmask": "255.255.255.255"
        },
        {
            "name": "cmdb-test.ncsa.illinois.edu",
            "start": "141.142.192.147",
            "netmask": "255.255.255.255"
        },
        {
            "name": "cmdb-dev-alinab.ncsa.illinois.edu",
            "start": "141.142.193.11",
            "netmask": "255.255.255.255"
        },
        {
            "name": "cmdb-dev-kimber7.ncsa.illinois.edu",
            "start": "141.142.193.12",
            "netmask": "255.255.255.255"
        },
        {
            "name": "basin.ncsa.illinois.edu",
            "start": "141.142.193.190",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa mysql",
            "start": "141.142.192.249",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa mysql cluster",
            "start": "141.142.193.144",
            "netmask": "255.255.255.240"
        },
        {
            "name": "ncsa its-monitor",
            "start": "141.142.192.42",
            "netmask": "255.255.255.255"
        },
        { 
            "name": "ncsa wiki",
            "start": "141.142.192.52",
            "netmask": "255.255.255.255"
        },
        { 
            "name": "ncsa jira",
            "start": "141.142.192.24",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa wiki-test",
            "start": "141.142.192.248",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa jira-test",
            "start": "141.142.192.195",
            "netmask": "255.255.255.255"
        },
        {
            "name": "ncsa jiracmdline",
            "start": "141.142.194.1",
            "netmask": "255.255.255.255"
        },
        {
            "name": "www.ncsa.illinois.edu TechServices cPanel",
            "start": "18.220.149.166",
            "netmask": "255.255.255.255"
        },
        {
            "name": "campusmon2v2.techservices.illinois.edu nagiosxi",
            "start": "192.17.18.71",
            "netmask": "255.255.255.255"
        },
    ];

    for (var i = 0; i < cerberus_bastion_subnets.length; i++)
    {
    if ( isInNet(host, cerberus_bastion_subnets[i].start, cerberus_bastion_subnets[i].netmask) )
        return cerberus_bastion_proxy;
    }


    // ACHE
    var ache_bastion_proxy = "SOCKS 127.0.0.1:8081";
    // 141.142.168.62/26 - VLAN 1912 (ACHE Services Net)
    // 192.168.30.102/16 - VLAN 1819 (ipmi)
    // 10.156.0.3/29 - VLAN 1910 (mForge DTN RED)
    // 10.156.1.19/24 - VLAN 1911 (mForge Interactive GREEN)

    var ache_bastion_subnets = [
        {
            "name": "ache-services-net",
            "start": "141.142.168.0",
            "netmask": "255.255.255.192"
        },
        {
            "name": "mforge-vmware-ipmi",
            "start": "172.28.2.0",
            "netmask": "255.255.255.192"
        },
        {
            "name": "mforge-private-ipmi",
            "start": "172.28.14.0",
            "netmask": "255.255.254.0"
        },
        {
            "name": "mforge-access-net",
            "start": "172.28.2.128",
            "netmask": "255.255.255.192"
        },
        // NOT ACCESSIBLE FROM ache-bastion ??
        // {
        //     "name": "mforge-private-mgmt",
        //     "start": "10.1.0.0",
        //     "netmask": "255.255.0.0"
        // },
        {
            "name": "ache-ipmi",
            "start": "172.28.2.64",
            "netmask": "255.255.255.192"
        },
        {
            "name": "ache-mforge-access",
            "start": "172.28.2.128",
            "netmask": "255.255.255.192"
        },
        {
            "name": "ache-vmware-mgmt",
            "start": "172.28.2.192",
            "netmask": "255.255.255.192"
        },
        {
            "name": "ache-neteng-safetynet",
            "start": "172.28.3.0",
            "netmask": "255.255.255.192"
        },
        {
            "name": "ache-facilities-mgmt",
            "start": "172.28.3.64",
            "netmask": "255.255.255.192"
        },
        {
            "name": "mforge-archive-data",
            "start": "172.30.0.0",
            "netmask": "255.255.255.192"
        },
        {
            "name": "ache-vmware-vmotion",
            "start": "172.30.0.64",
            "netmask": "255.255.255.192"
        },
    ];

    for (var i = 0; i < ache_bastion_subnets.length; i++)
    {
        if ( isInNet(host, ache_bastion_subnets[i].start, ache_bastion_subnets[i].netmask) )
            return ache_bastion_proxy;
    }


    // SECURITY BASTION
    // var  security_proxy = "SOCKS 127.0.0.1:8082";
    // NOTHING DEFINED YET FOR SECURITY PROXY


    // MAGNUS ADMIN BASTION
    var magnus_proxy = "SOCKS 127.0.0.1:8083";
    var magnus_subnets = [
        {
            "name": "MAGNUS BMC SUBNET",
            "start": "172.29.14.1",
            "netmask": "255.255.255.0"
        },
        {
            "name": "MAGNUS MGMT SUBNET",
            "start": "172.29.15.1",
            "netmask": "255.255.255.0"
        },
    ];
    for (var i = 0; i < magnus_subnets.length; i++)
    {
        if ( isInNet(host, magnus_subnets[i].start, magnus_subnets[i].netmask) )
            return magnus_proxy;
    }


    // LSST TUCSON BASTION
    var lsst_tucson_bastion_proxy = "SOCKS 127.0.0.1:8084";
    var lsst_tucson_bastion_subnets = [
        {
            "name": "lsst tucson atarchiver idrac",
            "start": "140.252.32.127",
            "netmask": "255.255.255.255"
        },
        {
            "name": "lsst tucson comcam idrac",
            "start": "140.252.32.161",
            "netmask": "255.255.255.248"
        },
    ];
    for (var i = 0; i < lsst_tucson_bastion_subnets.length; i++)
    {
        if ( isInNet(host, lsst_tucson_bastion_subnets[i].start, lsst_tucson_bastion_subnets[i].netmask) )
            return lsst_tucson_bastion_proxy;
    }


    // Acer
    var acer_bastion_proxy = "SOCKS 127.0.0.1:8087";

    var acer_bastion_subnets = [
        {
            "name": "EqualLogic dharmastation group - arrow and swan",
            "start": "192.168.152.2",
            "netmask": "255.255.255.254"
        },
        {       
            "name": "EqualLogic dharma-npcf group - pearl",
            "start": "192.168.152.4",
            "netmask": "255.255.255.254"
        },
        {
            "name": "Synology datastore",
            "start": "192.168.152.241",
            "netmask": "255.255.255.254"
        },
    ];
    for (var i = 0; i < acer_bastion_subnets.length; i++)
    {
        if ( isInNet(host, acer_bastion_subnets[i].start, acer_bastion_subnets[i].netmask) )
            return acer_bastion_proxy;
    }


    // Holl-I
    var holli_bastion_proxy = "SOCKS 127.0.0.1:8088";

    var holli_bastion_subnets = [
        {
            "name": "HOLLI BMC SUBNET",
            "start": "172.28.40.1",
            "netmask": "255.255.255.192"
        },
        {
            "name": "HOLLI MGMT SUBNET",
            "start": "172.28.40.65",
            "netmask": "255.255.255.192"
        },
    ];
    for (var i = 0; i < holli_bastion_subnets.length; i++)
    {
        if ( isInNet(host, holli_bastion_subnets[i].start, holli_bastion_subnets[i].netmask) )
            return holli_bastion_proxy;
    }


    // mFORGE head node
    var mforgehn_bastion_proxy = "SOCKS 127.0.0.1:8089";

    var mforgehn_bastion_subnets = [
        {
            "name": "MFORGE GREEN TUNNEL SUBNET",
            "start": "10.156.1.0",
            "netmask": "255.255.255.0"
        },
        {   
            "name": "MFORGE RED TUNNEL SUBNET",
            "start": "10.156.0.0",
            "netmask": "255.255.255.248"
        },
    ];
    for (var i = 0; i < mforgehn_bastion_subnets.length; i++)
    {
        if ( isInNet(host, mforgehn_bastion_subnets[i].start, mforgehn_bastion_subnets[i].netmask) )
            return mforgehn_bastion_proxy;
    }


    // No match
    return "DIRECT";

}
