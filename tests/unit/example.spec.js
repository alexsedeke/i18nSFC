import { shallowMount, createLocalVue } from '@vue/test-utils';
import i18n from '@/i18n';
import I18nComponent from '@/components/HelloI18n.vue';

const localVue = createLocalVue();

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(I18nComponent, {
      localVue,
      i18n
    });
    expect(wrapper).toBeDefined();
    const testElement = wrapper.find('#hello');
    expect(testElement).toBeDefined();
    expect(testElement.text()).toMatch('Hello i18n in SFC!');
  });
});
