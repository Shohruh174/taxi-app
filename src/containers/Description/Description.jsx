import React from 'react';

import "./Description.scss";

const Description = () => {
	return (
		<div className="Description">
			<div className="Description-inner">
				<h3 className="Description-title">Официальное такси аэропорта Симферополь</h3>

				<ul className="Description-itemsWrapper">
					<div className="flex items-start justify-start">
						<span className="Description-num">1</span>
						<li className="Description-item">
							Значимость этих проблем настолько очевидна, 
							что рамки и место обучения кадров способствует 
							подготовки и реализации направлений прогрессивного развития.
						</li>
					</div>

					<div className="flex items-start justify-start">
						<span className="Description-num">2</span>
						<li className="Description-item">
							Разнообразный и богатый опыт постоянный количественный 
							рост и сфера нашей активности требуют от нас анализа форм развития. 
							Идейные соображения высшего порядка, а также консультация с широким 
							активом обеспечивает широкому кругу (специалистов) участие в формировании 
							дальнейших направлений развития.
						</li>
					</div>

					<div className="flex items-start justify-start">
						<span className="Description-num">3</span>
						<li className="Description-item">
							Товарищи! начало повседневной работы по формированию позиции 
							способствует подготовки и реализации форм развития. 
							Идейные соображения высшего порядка, а также консультация 
							с широким активом позволяет оценить значение позиций, занимаемых 
							участниками в отношении поставленных задач. Товарищи! дальнейшее 
							развитие различных форм деятельности требуют определения и уточнения 
							систем массового участия.
						</li>
					</div>
				</ul>

				<ol>
					<div className="flex">
					 	<span className="Description-cycle"></span>
						<li className="Description-item">
							Значимость этих проблем настолько очевидна,
							что рамки и место обучения кадров способствует
							подготовки и реализации направлений прогрессивного развития.
						</li>
					</div>

					<div className="flex">
						<span className="Description-cycle"></span>
						<li className="Description-item">
							Разнообразный и богатый опыт постоянный
							количественный рост и сфера нашей активности
							требуют от нас анализа форм развития. Идейные
							соображения высшего порядка, а также консультация
							с широким активом обеспечивает широкому кругу(специалистов)
							участие в формировании дальнейших направлений развития.
						</li>
					</div>

					<div className="flex">
						<span className="Description-cycle"></span>
						<li className="Description-item">
							Товарищи! начало повседневной работы по формированию
							позиции способствует подготовки и реализации форм развития.
							Идейные соображения высшего порядка, а также консультация
							с широким активом позволяет оценить значение позиций,
							занимаемых участниками в отношении поставленных задач.
							Товарищи! дальнейшее развитие различных форм деятельности
							требуют определения и уточнения систем массового участия.
						</li>
					</div>
				</ol>
			</div>
		</div>
	)
}

export default Description;