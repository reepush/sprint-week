class { 'nodejs':
  version      => 'stable',
  make_install => false,
}

class { 'ruby':
  version      => '2.1.5',
}

class { 'redis': }
class { 'mongodb': }
class { 'postgresql::server': }
class { 'nginx': }
