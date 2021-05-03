import downgradeRoot from 'downgrade-root';
import sudoBlock from 'sudo-block';

export default function rootCheck(...arguments_) {
	try {
		downgradeRoot();
	} catch {}

	sudoBlock(...arguments_);
}
