import React from 'react';
import style from './content.module.css';
import {useRouter} from 'next/navigation';
import {useMachine} from '@xstate/react';
import contentMachine from '../machines/contentmachine';

const ContentComponent = () => {
	const [current, send] = useMachine(contentMachine);

	const handlePrivacyClick = () => {
		send('PRIVACY_CLICKED');
	};

	const handlePublishClick = () => {
		send('PUBLISH_CLICKED');
	};

	return (
		<div className={style.container}>
			<div className={style.title}>
				<h1>Creador de contenido</h1>
			</div>
			<form className={style.form}>
				<div className={style.background}>
					<div className={style.items}>
						<div className={style.formGroup}>
							<label htmlFor='nombre'>Nombre</label>
							<input type='text' id='nombre' />
						</div>
						<div className={style.formGroup}>
							<label htmlFor='descripcion'>Descripción</label>
							<textarea id='descripcion' />
						</div>
					</div>
					<div className={style.image}>
						<div className={`${style.formGroup} ${style.dropZone}`}>
							<input type='file' style={{display: 'none'}} />
						</div>
					</div>
				</div>
				<div className={style.buttons}>
					<button
						className={style.privacy}
						type='button'
						onClick={handlePrivacyClick}
					>
						Privacidad
					</button>
					<button
						className={style.publish}
						type='button'
						onClick={handlePublishClick}
					>
						Publicar contenido
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContentComponent;
