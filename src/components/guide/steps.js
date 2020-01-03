export default self => [
  {
    element: '#handler-sidebar',
    popover: {
      title: self.$t('guide.sidebarTitle'),
      description: self.$t('guide.sidebarDescription'),
      position: 'bottom',
    },
  },
  {
    element: '#handler-breadcrumb',
    popover: {
      title: self.$t('guide.breadcrumbTitle'),
      description: self.$t('guide.breadcrumbDescription'),
      position: 'bottom',
    },
  },
  {
    element: '#handler-in18',
    popover: {
      title: self.$t('guide.in18Title'),
      description: self.$t('guide.in18Description'),
      position: 'left',
    },
  },
  {
    element: '#handler-screenfull',
    popover: {
      title: self.$t('guide.screenfulTitle'),
      description: self.$t('guide.screenfulDescription'),
      position: 'left',
    },
  },
  {
    element: '#handler-personal-center',
    popover: {
      title: self.$t('guide.personalCenterTitle'),
      description: self.$t('guide.personalCenterDescription'),
      position: 'left',
    },
    padding: 0,
  },
  {
    element: '#handler-tags-view',
    popover: {
      title: self.$t('guide.tagsViewTitle'),
      description: self.$t('guide.tagsViewDescription'),
      position: 'bottom',
    },
    padding: 0,
  },
];
