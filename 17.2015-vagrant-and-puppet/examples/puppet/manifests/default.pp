class { 'nodejs': }

class { 'ruby':
  version => '2.1.5',
}

class { 'redis': }
class { 'mongodb': }

class { 'postgresql::globals':
  manage_package_repo => true,
  version => '9.4',
}
class { 'postgresql::server': }
class { 'postgresql::lib::devel': }
class { 'postgresql::server::contrib': }

class { 'nginx': }
